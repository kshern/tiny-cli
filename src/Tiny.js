/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Shern
*/
var tinify = require('tinify')

var fs = require('fs')


 class Tiny{
    constructor(option) {
        this.pathFrom = option&&option.pathFrom ||'';
        this.pathTo = option&&option.pathTo||'';
        tinify.key = option&&option.key||'';
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

    //异步执行压缩
    async goTiny(file) {
        var time1 = new Date().getTime();
        var source = await tinify.fromFile(this.pathFrom+'/'+file);
        await source.toFile(this.pathTo+'/'+file, (err) =>if(err){console.log(err)});
        var time2 = new Date().getTime();
        return time2 - time1;
    }
    //异步读取目录下图片
    async ls(){
          var files= await this.readdir(this.pathFrom),reg=/(\.jpg)|(\.png)$/
          return files.filter((file)=>{
              return reg.test(file)
          })
    }
    // 执行
    run(){
        this.ls().then(v => {
            let array = v || []
            array.map((file) => {
                // console.log(tiny.toString())
                return this.goTiny(file).then((result) => {
                    console.log(file+'压缩完成，耗时' + result + '毫秒')
                })
            })
        })
    }

}

module.exports=Tiny


