// 文档地址：https://nodejs.p2hp.com/learn/

// Node.js 是开源的；
// Node.js 是跨平台的 JavaScript 运行时环境；
// Node.js 是运行在谷歌的 V8 JavaScript 引擎上的，是独立与浏览器之外的；也就是说兼容性是根据 node 的版本来的，不用担心浏览器支持问题。
// Node.js 执行 I/O 操作时，不会阻塞线程和浪费 CPU 周期等待。会在响应返回时恢复操作。
// 在 Node.js 中，可以毫无问题的使用行的 ECMAScript 标准，而不必等用户更新浏览器，你只需要更改 Node.js 版本就行了。


// 常见的 Hello World 示例
// 1.复制粘贴下面代码，然后保存为 server.js 文件
// 2.然后终端中执行 node server.js
const http = require("http");

const hostname = "127.0.0.1";
const port = "9999";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello world\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

// 上面的示例用到了 Node.js 的 http 模块。
