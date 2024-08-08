// 文档地址：https://nodejs.cn/en/learn/manipulating-files/working-with-folders-in-nodejs



// 1.检查文件是否存在
// 使用 fs.access() （及其基于 promise 的 fsPromises.access() 对应项）检查文件夹是否存在，Node.js 是否有权限访问它。


// 2.创建文件夹
// 使用 fs.mkdir() 或 fs.mkdirSync() 或 fsPromises.mkdir() 创建文件夹。

// const fs = require("node:fs");
// const folderName = "test";
// try {
//     // fs.existsSync()文档：ttps://nodejs.cn/api/fs.html#fsexistssyncpath
//     // 如果路径存在则返回 true，否则返回 false
//     if(!fs.existsSync(folderName)) {
//         fs.mkdirSync(folderName);
//     }
// } catch (error) {
//     console.log("创建失败：", error);
// }


// 3.读取目录内容
// 使用 fs.readdir() 或 fs.readdirSync 或 fsPromises.readdir() 读取目录的内容。

// const fs = require("node:fs");
// const path = require("node:path");
// const folderPath = "test";
// console.log(fs.readdirSync(folderPath));
// // 返回一个数组，只读取文件的下一级目录内容，如果里面还有文件夹的话，则返回文件夹名称，不返回文件夹内的文件。
// fs.readdirSync(folderPath);



// // 获取完整路径
// const wz = fs.readdirSync(folderPath).map(fileName => {
//     return path.join(folderPath, fileName);
// })
// console.log("wz：", wz);


// 你也可以过滤结果以仅返回文件，排除文件夹
// const fs = require("node:fs");
// const path = require("node:path");
// const folderPath = "test";

// const isFile = fileName => {
//     return fs.lstatSync(fileName).isFile();
// }

// const result = fs.readdirSync(folderPath).map(fileName => {
//     return path.join(folderPath, fileName);
// }).filter(isFile);
// console.log("result:", result);



// 4.重命名文件夹
// 使用 fs.rename() 或 fs.renameSync() 或 fsPromises.rename() 重命名文件夹。
// 第一个参数是当前路径，第二个参数是新路径。

// const fs = require("node:fs");
// fs.rename("test", "one", err => {
//     if(err) {
//         console.log("重命名失败：", err);
//     }
// })


// fs.renameSync() 是同步版本
// const fs = require("node:fs");
// try {
//     fs.renameSync("one", "test");
// } catch (error) {
//     console.log("重命名失败：", error);
// }


// fsPromises.rename() 是基于 promise 的版本
// const fs = require("node:fs/promises");
// async function example() {
//     try {
//         await fs.rename("test", "two");
//     } catch (error) {
//         console.log("重命名失败：", error);
//     }
// }
// example();



// 5.删除文件夹
// 使用 fs.rmdir() 或 fs.rmdirSync() 或 fsPromises.rmdir() 删除文件夹
const fs = require("node:fs");
// 用这个方法只能删除空文件夹
// fs.rmdir("two", err => {
//     if(err) {
//         console.log("删除失败：", err);
//     }
// })

// 要删除包含内容的文件夹，请使用 fs.rm() 和选项 { recursive: true } 以递归方式删除内容。
// { recursive: true, force: true } 使得如果文件夹不存在，则会忽略异常。
fs.rm("two", { recursive: true, force: true }, err => {
    if(err) {
        throw err;
    }
    // 删除成功
    console.log("删除成功");
})