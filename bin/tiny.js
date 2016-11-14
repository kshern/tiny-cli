#!/usr/bin/env node

'use strict';
var path = require('path');
var keyList = require(path.resolve(__dirname, '../lib/key.json'));
var fs = require('fs');
var cp = require('child_process');
var Tiny = require('../lib/Tiny.js');

var commander = require('commander');

var currentKey = keyList[0].current || keyList[1];

commander
<<<<<<< HEAD
    .version('1.1.5')//声明tiny的版本号
=======
    .version('1.1.2')//声明tiny的版本号
>>>>>>> 68c324c4e094b4a164beb3ead43aed3019c8ef26
    .arguments('<key>')
    .action(function (key) {//start命令的实现体
        var key = key || currentKey;
        fs.exists('dist', (exists) => {
            if (!exists) {
                fs.mkdir('dist', () => {
                    console.log('dist文件夹不存在，已新建')
                });
            }
        });
        new Tiny({ pathFrom: process.cwd(), pathTo: path.join(process.cwd(), 'dist'), key: key }).run()
    });

commander.command('run [file...]')
    .action(function (file) {
        var key = currentKey;
        if (key == '') {
            console.log("\n当前没有API KEY，请利用tiny add添加\n")
            return;
        }
        fs.exists('dist', (exists) => {
            if (!exists) {
                fs.mkdir('dist', () => {
                    console.log('\n未找到dist目录，已新建\n')
                });
            }
        });

        new Tiny({ pathFrom: process.cwd(), pathTo: path.join(process.cwd(), 'dist'), key: key }).run(file[0])

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
            fs.writeFile(path.join(__dirname, '../key.json'), JSON.stringify(keyList), (err) => {
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
<<<<<<< HEAD

=======
>>>>>>> 68c324c4e094b4a164beb3ead43aed3019c8ef26
        if (keyList[index] != undefined) {
            keyList[0].current = keyList[index];
            fs.writeFile(path.join(__dirname, '../lib/key.json'), JSON.stringify(keyList), (err) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log('\n切换成功，当前API KEY: ' + keyList[index] + '\n')
                }
            })
<<<<<<< HEAD
        }else{
            console.log('不存在该API KEY')
=======
>>>>>>> 68c324c4e094b4a164beb3ead43aed3019c8ef26
        }
    });

commander.command('current')
    .action(function (index) {
        console.log(currentKey)
    });

commander.command('delMenu')
    .action(function () {
            cp.exec(path.resolve(__dirname,'../lib/delReg.bat'), (err, stdout, stderr) => {
                if (err) {
                    console.log(err)
                    return;
                } else {
                    console.log('右键菜单删除成功')
                }
            });
    });

commander.parse(process.argv);//解析用户输入的参数并触发回调

