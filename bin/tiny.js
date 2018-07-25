#!/usr/bin/env node

'use strict';
var path = require('path');
var keyList = require(path.resolve(__dirname, '../src/key.json'));
var fs = require('fs');
var cp = require('child_process');
var Tiny = require('../src/Tiny.js');

var commander = require('commander');

var currentKey = keyList[0].current || keyList[1];

commander
    .version('1.1.5')//声明tiny的版本号
    .arguments('<key>')
    .action(async function (key) {//start命令的实现体
        var key = key || currentKey;
        let isDistExists = await fs.existsSync('dist')
        if (!isDistExists) {
            fs.mkdir('dist', () => {
                console.log('dist文件夹不存在，已新建')
            });
        }
        new Tiny({ pathFrom: process.cwd(), pathTo: path.join(process.cwd(), 'dist'), key: key }).run()
    });

commander.command('run [file...]')
    .action(async function (file) {
        // console.log(file)

        var fileAll = file.join(' ')
        // console.log(fileAll)
        var key = currentKey;
        if (key == '') {
            console.log("\n当前没有API KEY，请利用tiny add添加\n")
            return;
        }
        let isDistExists = await fs.existsSync('dist')
        if (!isDistExists) {
            fs.mkdir('dist', () => {
                console.log('dist文件夹不存在，已新建')
            });
        }

        new Tiny({ pathFrom: process.cwd(), pathTo: path.join(process.cwd(), 'dist'), key: key }).run(fileAll)

    });

commander.command('ls')
    .action(function (key) {
        console.log('index ----- API KEY')
        keyList.map((v, i) => {
            if (i == 0) return
            console.log('  ' + i + '   ----- ' + v)
        })
    });

commander.command('add <key>')
    .action(function (key) {
        new Tiny({ key: key }).valid(() => {
            keyList.push(key)
            fs.writeFile(path.join(__dirname, '../lib/key.json'), JSON.stringify(keyList), (err) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log('\n添加成功，使用tiny current 查看当前APPID，使用tiny use <index> 切换API KEY\n')
                }
            })
        })
    });

commander.command('use <index>')
    .action(function (index) {
        if (keyList[index] != undefined) {
            keyList[0].current = keyList[index];
            fs.writeFile(path.join(__dirname, '../lib/key.json'), JSON.stringify(keyList), (err) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log('\n切换成功，当前API KEY: ' + keyList[index] + '\n')
                }
            })
        } else {
            console.log('不存在该API KEY')
        }
    });

commander.command('current')
    .action(function (index) {
        console.log(currentKey)
    });

commander.command('delMenu')
    .action(function () {
        cp.exec(path.resolve(__dirname, '../scripts/delReg.bat'), (err, stdout, stderr) => {
            if (err) {
                console.log(err)
                return;
            } else {
                console.log('右键菜单删除成功')
            }
        });
    });

commander.parse(process.argv);//解析用户输入的参数并触发回调

