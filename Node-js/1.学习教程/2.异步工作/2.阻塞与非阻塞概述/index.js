// 文档地址：https://nodejs.cn/en/learn/asynchronous-work/overview-of-blocking-vs-non-blocking

// 阻塞方法同步执行，会阻塞进程。
// 非阻塞方法异步执行，不会阻塞进程。


const fs = require('node:fs');

const data = fs.readFileSync('/file.md'); // blocks here until file is read
console.log(data);
moreWork(); // will run after console.log



const fs = require('node:fs');

fs.readFile('/file.md', (err, data) => {
  if (err) throw err;
  console.log(data);
});
moreWork(); // will run before console.log


// 上面两个例子中，第一个例子的 console.log 将在 moreWork() 之前被调用，因为 readFileSync 是阻塞的，要等它执行完才会往下执行。
// 第二个例子的 moreWork() 则无需等待 readFile 执行完再执行。


// 混合阻塞和非阻塞代码的危险
const fs = require('node:fs');

fs.readFile('/file.md', (err, data) => {
  if (err) throw err;
  console.log(data);
});
fs.unlinkSync('/file.md');


// 上面的例子钟，fs.unlinkSync() 很可能再 fs.readFile() 之前运行，也就是可能再读取文件之前将其删掉。
// 所以，应该使用 完全非阻塞 的方式，保证正确的执行顺序。

const fs = require('node:fs');

fs.readFile('/file.md', (readFileErr, data) => {
  if (readFileErr) throw readFileErr;
  console.log(data);
  fs.unlink('/file.md', unlinkErr => {
    if (unlinkErr) throw unlinkErr;
  });
});
