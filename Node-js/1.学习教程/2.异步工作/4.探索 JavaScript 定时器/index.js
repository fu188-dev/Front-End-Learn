// 文档地址：https://nodejs.cn/en/learn/asynchronous-work/discover-javascript-timers
// 定时器模块：https://nodejs.cn/api/timers.html#google_vignette

// setTimeout 和 setInterval 可通过 定时器模块 在 Node.js 中使用。

// Node.js 还提供了 setImmediate()，这相当于使用 setTimeout(() => {}, 0)，主要用于与 Node.js 事件循环配合使用。