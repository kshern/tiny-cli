# tiny-cli

this cli is used for tinypng

## install

    cnpm i -g @jv/tiny-cli

## Usage

    tiny run

## 修改Tiny.js后编译

    cnpm i -g babel-cli

    cnpm run compile
    
## 查看包含的API KEY

    tiny ls

## 添加API KEY 

    tiny add <"YOUR_API_KEY">

输出格式为 <index> ----- "YOUR_API_KEY" 

## 切换API KEY

    tiny use <index>

## 内置API KEY

<table>
    <tr><td>邮箱</td><td>密码</td><td>API KEY</td></tr>
    <tr><td>jv_fe_01@163.com</td><td>MhxzKhl</td><td>zBgZBRTRizrMBd8MzbQcKnJ_hvBc3u7F</td></tr>
    <tr><td>jv_fe_02@163.com</td><td>MhxzKhl</td><td>TK0SQqJqCvGrCivjWJZvOXB2bKTdAg2x</td></tr>
    <tr><td>jv_fe_03@163.com</td><td>MhxzKhl</td><td>L-R9eUg9bs_4nnJhiFr8sZnb6VliM8Lc</td></tr> 
</table>

每个API KEY每月限额500张图片，超过请自行添加


## Windows系统

在Windows系统下会执行注册表写入，将图片压缩功能集成到鼠标右键，功能如下：

1. 点击文件夹右键tinypng => 压缩目标文件夹下图片

2. 当前文件夹空白处右键 => 压缩当前目录下所有图片

3. 点击文件右键 => 压缩目标文件


在右键菜单中删除tinypng

     tiny delMenu








    
