/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Shern
*/
var tinify = require('tinify')
<<<<<<< HEAD
var path = require('path')
=======
var path=require('path')


>>>>>>> 68c324c4e094b4a164beb3ead43aed3019c8ef26
var fs = require('fs')


class Tiny {
    constructor(option) {
        this.pathFrom = option && option.pathFrom || '';
        this.pathTo = option && option.pathTo || '';
        tinify.key = option && option.key || '';
    }

    //读取目录函数
    readdir(dir) {
        return new Promise((resolve, reject) => {
            fs.readdir(dir, (err, data) => {
                if (err) reject(error)
                resolve(data)
            })
        })
    }

    //验证key是否可用

<<<<<<< HEAD
    valid(cb) {
        tinify.validate((err) => {
            if (err) {
                console.log('APPID 无效')
            } else {
=======
     valid(cb){
        tinify.validate((err)=>{
            if (err) {
                console.log('APPID 无效')
            }else{
>>>>>>> 68c324c4e094b4a164beb3ead43aed3019c8ef26
                return cb();
            }
        })
    }

    //异步执行压缩
    async goTiny(file) {
        var time1 = new Date().getTime();
<<<<<<< HEAD
        console.log('开始压缩" ' + file + ' "')
        var source = await tinify.fromFile(this.pathFrom + '/' + file);
        await source.toFile(this.pathTo + '/' + file, (err) => {
            if (err instanceof tinify.AccountError) {
                console.log("The error message is: " + err.message);

                console.log('APPID有误，请使用tiny ls 查看，并使用tiny use 更换APPID')
            } else {

                if (err) {
=======
        console.log('开始压缩" '+file+' "')
        var source = await tinify.fromFile(this.pathFrom+'/'+file);
        await source.toFile(this.pathTo+'/'+file, (err) =>{
             if (err instanceof tinify.AccountError) {
                console.log("The error message is: " + err.message);
                // Verify your API key and account limit。
                console.log('APPID有误，请使用tiny ls 查看，并使用tiny use 更换APPID')
            } else {
                // Something else went wrong, unrelated to the Tinify API.
                if(err){
>>>>>>> 68c324c4e094b4a164beb3ead43aed3019c8ef26
                    console.log(err)
                }
            }
        });
        var time2 = new Date().getTime();
        return time2 - time1;
    }
    //异步读取目录下图片
<<<<<<< HEAD
    async ls() {
        var files = await this.readdir(this.pathFrom);
        return files.filter((file) => {
            return this.checkfile(file)
        })
=======
    async ls(){
          var files= await this.readdir(this.pathFrom),reg=/(\.jpg)|(\.png)$/;
          return files.filter((file)=>{
              return reg.test(file)
          })
>>>>>>> 68c324c4e094b4a164beb3ead43aed3019c8ef26
    }

    //过滤文件类型
    checkfile(fileName) {
        var reg = /(\.jpg)|(\.png)$/;
        return reg.test(fileName)
    }

    // 执行
<<<<<<< HEAD
    run(pic) {
        if (!pic) {
            this.ls().then(v => {
                let array = v || []
                array.map((file) => {
                    // console.log(tiny.toString())
                    return this.goTiny(file).then((result) => {
                        console.log('" ' + file + ' "压缩完成，耗时' + result + '毫秒')
                    });
                });
            });
        } else {
            var pic = path.basename(pic);
            if (this.checkfile(pic)) {
                this.goTiny(pic).then((result) => {
                    console.log('" ' + pic + ' "压缩完成，耗时' + result + '毫秒')
                })
            } else {
                console.log('只能压缩JPG和png格式图片');
            }

        }

=======
    run(pic){
        if(!pic){
            this.ls().then(v => {
            let array = v || []
            array.map((file) => {
                // console.log(tiny.toString())
                return this.goTiny(file).then((result) => {
                    console.log('" '+file+' "压缩完成，耗时' + result + '毫秒')
                })
            })
        })
        }else{
            var reg=/(\.jpg)|(\.png)$/;
            var pic=path.basename(pic);
            if(reg.test(pic)){
                this.goTiny(pic).then((result) => {
                    console.log('" '+pic+' "压缩完成，耗时' + result + '毫秒')
                })
            }else{
                console.log('只能压缩JPG和png格式图片')
            }
            
        }
     
>>>>>>> 68c324c4e094b4a164beb3ead43aed3019c8ef26
    }

}

module.exports = Tiny


