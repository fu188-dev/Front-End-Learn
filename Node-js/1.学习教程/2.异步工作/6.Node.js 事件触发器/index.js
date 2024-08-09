// 文档地址：https://nodejs.cn/en/learn/asynchronous-work/the-nodejs-event-emitter
// events 模块：https://nodejs.cn/api/events.html



// ----Node.js 事件触发器----
// Node.js 为我们提供了 events 模块构建类似系统的选项。
// 这个模块特别提供了 EventEmitter 类，我们将用它来处理事件。

// 使用如下方法初始化它：
const EventEmitter = require("node:events");
const eventEmitter = new EventEmitter();

// 此对象公开了 on 和 emit 方法等。
// emit 用于触发事件；
// on 用于添加触发事件时要执行的回调函数；


// 示例：
// 创建
eventEmitter.on("start", () => {
    console.log("start");
})
// 运行/调用
eventEmitter.emit("start");
// 这样就调用了上面创建的 start 方法。



// 传递多个参数
eventEmitter.on("start", (start, end) => {
    console.log(`${start} to ${end}`);
})
eventEmitter.emit("start", 1, 100);



// EventEmitter 对象公开了其他几种事件交互的方法，例如：
// once() ==> 添加一次监听器
// removeListener() / off() ==> 从事件中删除事件监听器
// removeAllListeners() ==> 删除事件的所有监听器