// 文档地址：https://nodejs.cn/en/learn/getting-started/an-introduction-to-the-npm-package-manager
// NPM 文档：https://docs.npmjs.com/
// Yarn 文档：https://yarnpkg.com/en/
// pnpm 文档：https://pnpm.io/



// Yarn 和 pnpm 是 npm cli 的替代工具。

// npm install：安装 package.json 中的所有依赖包，并将包添加到 node_modules 文件中。
// npm install <package-name>：安装指定依赖包。在 npm5 之前后面还需要加 --save 。
    // --save-dev：安装依赖包，并且将依赖包名称添加到 package.json 中的 devDependencies 中。
    // --no-dev：安装依赖包，但是不会将依赖包名称添加到 package.json 中的 dependencies 中。
    // --save-optional：安装依赖包，并且将依赖包名称添加到 package.json 中的 optionalDependencies 中。
    // --no-optional：将阻止安装可选项依赖包。

    // -S ==> --save
    // -D ==> --save-dev
    // -O ==> --save-optional

    // devDependencies：用于开发工具、或测试库等等，用于开发环境。
    // dependencies：用于生产环境。

// npm update：更新 package.json 中的所有依赖包到最新版本。
// npm update <package-name>：更新指定包到最新版本。
// npm install <package-name>@<verison>：安装指定依赖包的指定版本。
// npm run <task-name>：运行指定任务，如下例子：
{
    "scripts": {
      "watch": "webpack --watch --progress --colors --config webpack.conf.js",
      "dev": "webpack --progress --colors --config webpack.conf.js",
      "prod": "NODE_ENV=production webpack -p --config webpack.conf.js"
    }
}
// 可以运行如下任务
// npm run watch
// npm run dev
// npm run prod
  