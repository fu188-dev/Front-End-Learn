// 文档地址：https://nodejs.cn/en/learn/manipulating-files/working-with-file-descriptors-in-nodejs



// 在能够与文件系统中的文件交互之前，你必须获取文件描述符。
// 1.文件描述符是对打开文件的引用，是使用 fs 模块提供的 open() 方法打开文件返回的数字 (fd)。这个数字 (fd) 唯一地标识操作系统中打开的文件：
// const fs = require("node:fs");

// fs.open("test.js", "r", (err, fd) => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log("fd", fd);
    
// });

// 2.也可以使用 fs.openSync 方法打开文件，该方法返回文件描述符，而不是在回调中提供它：

// const fs = require("node:fs");
// try {
//     const fd = fs.openSync("test.js", "r");
//     console.log("fd：", fd);
// } catch (error) {
//     console.log(error);
// }

// 一旦你获得文件描述符，你就可以执行所有需要它的操作了。例如调用 fs.close() 和许多其他与文件系统交互的操作。


// 3.还可以使用 fs/promises 模块提供的基于 promise 的 fsPromises.open 方法打开文件：
// const fs = require("node:fs/promises");
// async function example() {
//     let filehandle;
//     try {
//         filehandle = await fs.open("test.js", "r");
//         console.log(filehandle.fd);
//         console.log(await filehandle.readFile({ encoding: "utf8" }));
        
        
//     } catch (error) {
        
//     } finally {
//         if(filehandle) await filehandle.close();
//     }
// }
// example();


// 4.fs/promises 模块仅从 Node.js v14 开始可用。
// 在 v14 之前、v10 之后，你可以改用 require("fs").promises。
// 在 v10 之前、v8 之后，你可以使用 util.promisify 将 fs 方法转换为基于 promise 的方法。
const fs = require("node:fs");
const util = require("node:util");

async function example() {
    const open = util.promisify(fs.open);
    const fd = await open("test.js", "r");
    console.log("fd: ", fd);
}
example();
