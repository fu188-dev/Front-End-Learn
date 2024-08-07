// 文档地址：https://nodejs.cn/en/learn/manipulating-files/reading-files-with-nodejs



// 1.读取文件最简单的方法是使用 fs.readFile() 方法，向其传递文件路径、编码、将使用文件数据（和错误）调用的回调函数。
// const fs = require("node:fs");

// fs.readFile("test.js", "utf-8", (err, data) => {
//     if(err) {
//         console.log("err: ", err);
//         return;
//     }
//     console.log("data: ", data);
// })

// 2.或者你可以使用同步版本 fs.readFileSync();
// const fs = require("node:fs");
// try {
//     const data = fs.readFileSync("test.js", "utf-8");
//     console.log("data: ", data);
// } catch (error) {
//     console.log(error);
// }

// 3.你还可以使用 fs/promises 模块提供的基于 promise 的 fsPromises.readFile() 方法：
const fs = require("node:fs/promises");
async function example() {
    try {
        const data = await fs.readFile("test.js", { encoding: "utf-8" });
        console.log("data: ", data);
    } catch (error) {
        console.log(error);
    }
}
example();


// fs.readFile()、fs.readFileSync()、fsPromises.readFile() 三个都在返回数据之前读取内存中文件的全部内容。
// 这意味着大文件将对内存消耗和程序执行速度产生重大影响。
// 在这种情况下，更好的选择是使用流读取文件内容。