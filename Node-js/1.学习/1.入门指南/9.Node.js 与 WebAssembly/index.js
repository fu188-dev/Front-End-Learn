// 文档地址：https://nodejs.p2hp.com/learn/nodejs-with-webassembly/
// WebAssembly 文档：https://webassembly.org/



// WebAssembly 是一种高性能的类汇编语言，可以从各种语言编译，包括 C/C++、Rust  和 AssemblyScript。目前，Chrome、Firefox、Safari、Edge和Node.js都支持它！
// WebAssembly 规范详细介绍了两种文件格式，一种称为 WebAssembly Module 的二进制格式，扩展名为.wasm，另一种是相应的文本表示，扩展名是WebAssemblyText格式，扩展号为.wat。

// 关键概念：
// Module（模块）：编译后的WebAssembly二进制文件，即.wasm文件。
// Memory（内存）：可调整大小的ArrayBuffer。
// Table（表）：未存储在内存中的可调整大小的引用类型数组。
// Instance（实例）：模块及其内存、表和变量的实例化。



// 为了使用WebAssembly，您需要一个.wasm二进制文件和一组API来与WebAssemblys通信。Node.js通过全局WebAssembly对象提供必要的API。

console.log(WebAssembly);
/*
Object [WebAssembly] {
  compile: [Function: compile],
  validate: [Function: validate],
  instantiate: [Function: instantiate]
}
*/



// 生成WebAssembly模块，有多种方法可用于生成WebAssembly二进制文件，包括：
// 1.手工编写WebAssembly（.wat），并使用 wabt（https://github.com/webassembly/wabt） 等工具转换为二进制格式
// 2.在C/C++应用程序中使用 emscripten（https://emscripten.org/）。
// 3.在Rust应用程序中使用 wasm-pack（https://rustwasm.github.io/wasm-pack/book/）。
// 4.如果您喜欢类似TypeScript的体验，请使用 AssemblyScript（https://www.assemblyscript.org/）。

// 其中一些工具不仅生成二进制文件，还生成JavaScript“粘合”代码和相应的HTML文件，以便在浏览器中运行。


// 如何使用它
// 一旦你有了WebAssembly模块，你就可以使用Node.js WebAssemblys对象来实例化它。

// 假设add.wasm文件存在，其中包含一个添加2个提供参数的函数
const fs = require('fs');

const wasmBuffer = fs.readFileSync('/path/to/add.wasm');
WebAssembly.instantiate(wasmBuffer).then(wasmModule => {
  // 导出的功能在instance.exports下运行
  const { add } = wasmModule.instance.exports;
  const sum = add(5, 6);
  console.log(sum); // Outputs: 11
});




// 与操作系统交互
// WebAssembly模块本身不能直接访问操作系统功能。第三方工具 Wasmtime（https://docs.wasmtime.dev/） 可用于访问此功能。Wasmtime使用 WASI（https://wasi.dev/） API 来访问操作系统功能。




// 资源
// General WebAssembly Information：https://webassembly.org/
// MDN Docs：https://developer.mozilla.org/en-US/docs/WebAssembly
// Write WebAssembly by hand：https://webassembly.github.io/spec/core/text/index.html