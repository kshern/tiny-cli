#!/usr/bin/env node

var fs = require('fs');
var cp = require('child_process')
var path=require('path')

if(process.env.OS=='Windows_NT'){

    fs.writeFile('addReg.bat', `reg add "HKCR\\Folder\\shell\\tinypng\\command" /f /t REG_SZ /d "cmd.exe /s /k cd %%1 && tiny run"
        reg add "HKCR\\Folder\\shell\\tinypng" /f /v Icon /t REG_SZ /d "${path.resolve(__dirname,'./tiny.ico')}"
        reg add "HKCR\\Directory\\Background\\shell\\tinypng\\command" /f /t REG_SZ /d "cmd.exe /s /k tiny run" 
        reg add "HKCR\\Directory\\Background\\shell\\tinypng" /f /v Icon /t REG_SZ /d "${path.resolve(__dirname,'./tiny.ico')}"
        reg add "HKCR\\*\\shell\\tinypng\\command" /f /t REG_SZ /d "cmd.exe /s /k tiny run %%1"
        reg add "HKCR\\*\\shell\\tinypng" /f /v Icon /t REG_SZ /d "${path.resolve(__dirname,'./tiny.ico')}"
        `, (err) => {
                cp.exec('addReg.bat', (err, stdout, stderr) => {
                    if (err) {
                        console.log(err)
                        return;
                    } else {
                        console.log('右键菜单写入成功')
                    }
                })
            })

}





