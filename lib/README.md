# 利用node开发基于命令行的工具（cli）

node中有许多工具npm、gulp、webpack、babel等，只需要用npm全局安装后即可在系统任意路径下执行，本文讨论下如何开发此类工具

## 原理

如果要在文件任意地点使用终端命令，需要将该命令的执行文件放于系统的环境变量下，当我们在终端中输入一个命令时，系统就会去环境变量下寻找该执行文件，
Windows下环境变量查看设置为：我的电脑->属性->高级设置->环境变量，我们可以看到npm已经被包含在环境变量中了

我们以pm2为例来分析如何开发一个命令行工具：

根据npm的系统变量路径打开npm目录，如下图，我们可以看到pm2文件和pm2.cmd文件：


打开文件就能发现其实是两个脚本，pm2 --option.cmd对应Windows下的脚本，pm2 --option对应*nix下的脚本，主要内容其实就是执行了\node_modules\pm2 --option\bin\pm2 --option

打开\node_modules\pm2\bin\pm2 --option文件，第一句为

    #!/usr/bin/env node

含义是利用node来解释该脚本，然后我们即可在该文件中利用js来编写命令行脚本，当在终端中输入pm2 --option，node就会执行该脚本。

在所有require中，我们需要介绍下 <a href='https://github.com/tj/commander.js'>commander</a> 模块，该模块是由tj开发，用于开发命令行工具，
pm2中使用了该模块

    #!/usr/bin/env node

    /**
    * Module dependencies.
    */

    var program = require('commander');

    program
    .version('0.0.1')//版本号，
    .option('-p, --peppers', 'Add peppers') //pm2 -p 
    .option('-P, --pineapple', 'Add pineapple')
    .option('-b, --bbq-sauce', 'Add bbq sauce')
    .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
    .parse(process.argv);//解析命令行参数，并且触发上述回调

对于pm2 start 等命令，可以通过如下命令定义

    commander.command('start <file|json|stdin|app_name|pm_id...>')
    .option('--watch', 'Watch folder for changes')
    .description('start and daemonize an app')
    .action(function(cmd) {
        // do something here
    });

其中cmd为命令行的参数，如果参数为空，则为整个Commander对象


## 利用yo生成项目

我们可以直接用yo来生成工程文件，通过sudo npm install -g generator-cli-starter安装cli开发脚手架，
只需要执行

    yo cli-starter 
    your project name  //输入项目名称
    your command name() //输入命令的名称，比如pm2

yo 就会生成所需的项目文件，以及在npm系统路径下生成快捷方式，链接到当前目录下，在任意路径下打开终端即可执行该命令



