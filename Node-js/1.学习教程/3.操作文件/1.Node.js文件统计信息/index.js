// 文档地址：https://nodejs.cn/en/learn/manipulating-files/nodejs-file-stats


// 每个文件都有一组我们可以使用 Node.js 检查的细节。特别是使用 fs module（https://nodejs.cn/api/fs.html） 提供的 stat() 方法。


// 可以获取到哪些信息：
// 如果文件是目录或文件，则使用 stats.isFile() 和 stats.isDirectory()
// 如果文件是使用 stats.isSymbolicLink() 的符号链接
// 使用 stats.size 获取文件大小。

// 你通过传递文件路径来调用它，一旦 Node.js 获取文件详细信息，它就会调用你传递的回调函数，带有 2 个参数：错误消息和文件统计信息：
// const fs = require('node:fs');

// fs.stat('./two.js', (err, stats) => {
//   if (err) {
//     console.error(err);
//   }
//   console.log(stats);
// });

// 获取到了如下信息：
// Stats {
//     dev: 2597381234,
//     mode: 33206,
//     nlink: 1,
//     uid: 0,
//     gid: 0,
//     rdev: 0,
//     blksize: 4096,
//     ino: 3659174700812249,
//     size: 598,
//     blocks: 1,
//     atimeMs: 1722927523593.5586,
//     mtimeMs: 1722927347968.308,
//     mtimeMs: 1722927347968.308,
//     mtimeMs: 1722927347968.308,
//     mtimeMs: 1722927347968.308,
//     mtimeMs: 1722927347968.308,
//     mtimeMs: 1722927347968.308,
//     ctimeMs: 1722927523563.6067,
//     ctimeMs: 1722927523563.6067,
//     birthtimeMs: 1722927520042.9888,
//     atime: 2024-08-06T06:58:43.594Z,
//     mtime: 2024-08-06T06:55:47.968Z,
//     ctime: 2024-08-06T06:58:43.564Z,
//     birthtime: 2024-08-06T06:58:40.043Z
// }



// Node.js 还提供了一种同步方法，它会阻止线程，知道文件系统信息准备就绪：
// const fs = require("node:fs");
// try {
//   const stats = fs.statSync("./two.js");
//   console.log(stats);
// } catch (error) {
//   console.log(error);
// }


// 你还可以使用 fs/promises 模块提供的基于 promise 的 fsPromises.stat() 方法：
const fs = require("node:fs/promises");
async function example() {
  try {
    const stats = await fs.stat("./two.js");
    console.log(stats);
    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats.isSymbolicLink());
    console.log(stats.size); // 字节为单位
  } catch (error) {
    console.log(error);
  }
}
example();