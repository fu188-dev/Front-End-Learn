// 文档地址：https://nodejs.cn/en/learn/getting-started/nodejs-the-difference-between-development-and-production



// Node.js 假设它总是在开发环境中运行。可以通过设置 Node_ENV=production 来告诉 Node.js 在生产中运行。
// 通常是通过执行命令来完成的：export NODE_ENV=production

// 在shell中，但最好将其放在shell配置文件中（例如bash shell中的.bash_profile），否则在系统重启的情况下，该设置将不会持久。
// 您还可以通过将环境变量添加到应用程序初始化命令的前面来应用它：
// NODE_ENV=production node app.js

// 将环境设置为生产环境可以确保：
    // 1.日志记录保持在最低、基本的水平；
    // 2.进行更多缓存级别以优化性能。


// 你可以使用条件语句在不同的环境中执行代码：
if(process.env.NODE_ENV === "development") {
    // ...
}

if(process.env.NODE_ENV === "production") {
    // ...
}

if(["production", "staging"].includes(process.env.NODE_ENV)) {
    // ...
}


// 例如，在Express应用程序中，您可以使用此功能为每个环境设置不同的错误处理程序：
if(process.env.NODE_ENV === "development") {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
}

if(process.env.NODE_ENV === "production") {
    app.use(express.errorHandler());
}
  