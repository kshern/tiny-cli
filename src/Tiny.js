/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Shern
*/
let tinify = require('tinify')
let path = require('path')
let fs = require('fs')


class Tiny {
    constructor(option) {
        this.pathFrom = option && option.pathFrom || '';
        this.pathTo = option && option.pathTo || '';
        tinify.key = option && option.key || '';
    }

    //重构为同步函数 
    // //读取目录函数
    // readdir(dir) {
    //     return new Promise((resolve, reject) => {
    //         fs.readdir(dir, (err, data) => {
    //             if (err) reject(error)
    //             resolve(data)
    //         })
    //     })
    // }

    //验证key是否可用

    valid(cb) {
        tinify.validate((err) => {
            if (err) {
                console.log('APPID 无效')
            } else {
                return cb();
            }
        })
    }

    //异步执行压缩
    async goTiny(file) {
        console.log('开始压缩" ' + file + ' "')
        let source = await tinify.fromFile(this.pathFrom + '/' + file);
        let toFile = new Promise((resolve, reject) => {
            source.toFile(this.pathTo + '/' + file, (err) => {
                if (err instanceof tinify.AccountError) {
                    console.error("The error message is: " + err.message);
                    // Verify your API key and account limit。
                    console.error('APPID有误，请使用tiny ls 查看，并使用tiny use 更换APPID')
                    reject(err)
                } else {
                    if (err) {
                        console.error(err)
                        reject(err)
                    }
                    resolve(true)
                }
            });
        })
        return toFile
    }
    //异步读取目录下图片
    async ls() {
        let files = await fs.readdirSync(this.pathFrom), reg = /(\.jpg)|(\.png)$/;
        return files.filter((file) => {
            return reg.test(file)
        })
    }

    //过滤文件类型
    checkfile(fileName) {
        let reg = /(\.jpg)|(\.png)$/;
        return reg.test(fileName)
    }

    // 执行
    async run(picOrg) {
        var that = this
        if (!picOrg) {
            let files = await this.ls();
            files.map((file) => {
                let time1 = new Date().getTime();
                return that.goTiny(file).then((value) => {
                    let time2 = new Date().getTime()
                    let result = time2 - time1
                    console.log('" ' + file + ' "压缩完成，耗时' + result + '毫秒')
                }).catch((err) => {
                    console.error(err)
                })
            })
        } else {
            let reg = /(\.jpg)|(\.png)$/;
            let pic = path.basename(picOrg);
            if (reg.test(pic)) {
                let time1 = new Date().getTime()
                this.goTiny(pic).then(() => {
                    let time2 = new Date().getTime()
                    let result = time2 - time1
                    console.log('" ' + pic + ' "压缩完成，耗时' + result + '毫秒')
                }).catch((err) => {
                    console.log(err)
                })
            } else {
                console.log('只能压缩JPG和png格式图片')
            }

        }

    }

    scrapyImgs() {

    }

    async getImgList() {

    }

}

module.exports = Tiny


