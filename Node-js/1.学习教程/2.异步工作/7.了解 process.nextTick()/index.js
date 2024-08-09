// 文档地址：https://nodejs.cn/en/learn/asynchronous-work/understanding-processnexttick



// 当我们将一个函数传递给 process.nextTick() 时，我们会指示引擎在当前操作结束之后，下一个事件循环开始之前，调用此函数。
// 也就是告诉 js 引擎异步处理函数的方式，要尽快处理该函数，不要让其排队。

// 可以看下面的示例：
console.log('Hello => number 1');

setImmediate(() => {
  console.log('Running before the timeout => number 3');
});

setTimeout(() => {
  console.log('The timeout running last => number 4');
}, 0);

process.nextTick(() => {
  console.log('Running at next tick => number 2');
});


// 结果:
// Hello => number 1
// Running at next tick => number 2
// Running before the timeout => number 3
// The timeout running last => number 4
