/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Shern
*/

var fs= require('fs')
var path=require('path')

class Sprite{
    constructor(option) {
        
    }

    async checkFileSize(file){
        let s= await fs.statSync(file)
        if(s.size<=40960){
            return true
        }else{
            return false
        }
    }

    async readFile(file){
        var t= await fs.readFileSync(file,'utf-8')
        console.log(typeof t)
    }

}

new Sprite().readFile(path.join(process.cwd(),'./src/Tiny.js'))