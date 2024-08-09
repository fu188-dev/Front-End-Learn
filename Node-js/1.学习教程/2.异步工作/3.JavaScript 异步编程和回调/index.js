// 文档地址：https://nodejs.cn/en/learn/asynchronous-work/javascript-asynchronous-programming-and-callbacks

// 计算机在设计上是异步的。
// 但是通常情况下，编程语言是同步的。
// C、Java、C#、PHP、Go、Ruby、Swift 和 Python 默认都是同步的。其中一些通过使用线程来处理异步操作，从而产生一个新进程。


// ----JavaScript----
// JavaScript 默认是同步的，并且是单线程的。这意味着代码无法创建新线程并行运行。
// 代码行按顺序执行，一个接一个。例如：
const a = 1;
const b = 2;
const c = a * b;
console.log(c);
doSomething();


// 但是 JavaScript 在浏览器中的主要工作是响应用户操作，如 onClick、onMouseOver 等等。那么如何使用同步编程模型做到这一点呢？
// 答案在其环境中。浏览器提供了一种方法，通过提供一组可以处理此类功能的 API。


// node.js 也引入了这个概念到其中。



// ----回调----
// 你无法知道用户合适会单击按钮。因此，你为 click 事件定义了一个事件处理 程序。此事件处理程序接收一个函数，该函数将在触发事件时被调用：

document.getElementById('button').addEventListener('click', () => {
  // item clicked
});

// 这就是所谓的 回调。

// 还有一个常见的例子就是使用 定时器
setTimeout(() => {
  // runs after 2 seconds
}, 2000);


// ----处理回调中的错误----
// 在 Node.js 中，它使用的是：错误优先回调 ==> 即任何回调函数中的第一个参数都是错误对象。
// 如果没有错误，则对象为 null。如果有错误，则包含一些错误描述和其他信息。

const fs = require('node:fs');

fs.readFile('/file.json', (err, data) => {
  if (err) {
    // handle error
    console.log(err);
    return;
  }

  // no errors, process data
  console.log(data);
});


// ----回调的问题----
// 回调非常适合简单的情况！
// 每个回调都会增加一层嵌套，当你有大量回调时，代码就会变得很复杂，并且看起来也很头痛！
// 例如：
window.addEventListener('load', () => {
  document.getElementById('button').addEventListener('click', () => {
    setTimeout(() => {
      items.forEach(item => {
        // your code here
      });
    }, 2000);
  });
});


// 那么药如何解决这个问题呢？请看下面：


// ----回调的替代方案----
// 从 ES6 开始，JavaScript 引入了几个功能，可帮助我们处理不涉及使用回调的异步代码：Promises（ES6）和 Async/Await（ES2017）。