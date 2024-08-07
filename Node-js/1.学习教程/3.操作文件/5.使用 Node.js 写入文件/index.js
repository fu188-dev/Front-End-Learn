// 文档地址：https://nodejs.cn/en/learn/manipulating-files/writing-files-with-nodejs
// fs 文档地址：https://nodejs.cn/api/fs.html#file-system-flags


// 1.写入文件最简单的方法是使用 fs.writeFile() API：
// 这种写入的方法会把原有文件的内容全部覆盖！
// const fs = require("node:fs");
// const content = "// 写入文件内容！";
// fs.writeFile("test.js", content, err => {
//     if(err) {
//         console.log("err: ", err);
//     } else {
//         // 写入成功
//     }
// });


// 2.同步写入文件 fs.writeFileSync();
// const fs = require("node:fs");
// const content = "// 同步写入内容！";
// try {
//     fs.writeFileSync("test.js", content);
// } catch (error) {
//     console.log("error: ", error);
// }


// 3.还可以使用 fs/promises 模块提供的基于 promise 的 fsPromises.writeFile() 方法：
// const fs = require("node:fs/promises");
// async function example() {
//     try {
//         const content = "// promises 写入！！！！";
//         // await fs.writeFile("test.js", content);
//         // await fs.writeFile("test.js", content, { flag: "w+" });
//         // await fs.writeFile("test.js", content, { flag: "a" });
//         await fs.writeFile("test.js", content, { flag: "a+" });
//     } catch (error) {
//         console.log("error: ", error);
//     }
// }
// example();


// 默认情况下，写入的内容将替换文件中的内容，可以修改它，添加至末尾：
// fs.writeFile("test.js", content, { flag: "a+" }, err => {});
// r+ ==> 打开文件进行读写
// w+ ==> 打开文件进行读写，并将流定位在文件开头
// a ==> 打开文件进行写入，并将流定位在文件末尾
// a+ ==> 打开文件进行读写，并将流定位在文件末尾




// 当你不想用新内容覆盖文件，而是想向文件中添加内容时，将内容附加到文件会非常方便。
// 1.使用 fs.appendFile() (及其 fs.appendFileSync() 对应项)：
// const fs = require("node:fs");
// const content = "\n// 添加至末尾，不会覆盖原文件的内容。";
// fs.appendFile("test.js", content, err => {
//     if(err) {
//         console.log("写入失败：", err);
//     } else {
//         // 写入完成
//     }
// });


// 2.使用 fsPromises.appendFile():
const fs = require("node:fs/promises");
async function example() {
    try {
        const content = "\n// 写入至末尾，通过 promises 方式。";
        await fs.appendFile("test.js", content);
    } catch (error) {
        console.log("写入失败：", error);
    }
}
example();




