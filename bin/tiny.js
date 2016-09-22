#!/usr/bin/env node

'use strict';
var path=require('path');

var fs= require('fs');


var Tiny = require('../lib/Tiny.js');

var commander = require('commander');

commander
    .version('1.0.9')//声明tiny的版本号
    .arguments('<key>')
     .action(function(key) {//start命令的实现体
        fs.exists('dist',(exists)=>{
            if(!exists){
                fs.mkdir('dist',()=>{
                    console.log('dist文件夹不存在，已新建')
                })
            }
        })
        new Tiny({pathFrom:process.cwd(),pathTo:path.join(process.cwd(),'dist'),key:key}).run()
    });

commander.parse(process.argv);//解析用户输入的参数并触发回调
