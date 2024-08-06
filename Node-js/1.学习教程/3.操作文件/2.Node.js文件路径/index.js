// 文档地址：https://nodejs.cn/en/learn/manipulating-files/nodejs-file-paths


// 需要注意如下差异：
// 在 Linux 和 macOS 上，获取的路径是这样：/users/joe/file.txt
// 在 Windows 上，获取的路径是这样：C:\users\joe\file.txt


// 使用 const path = require("node:path"); 你就可以使用它的其他方法了。

// 从路径中获取信息
// dirname()：获取文件的父文件夹名称
// basename()：获取文件名称
// extname()：获取文件扩展名

const path = require("node:path");
const test = "test.txt";
console.log("父文件名称（这里指的是test，因为text.txt前面没有，所以没有）：", path.dirname(test));
console.log("文件整个名称（包含扩展名）：", path.basename(test));
console.log("文件扩展名：", path.extname(test));
// 你可以通过为 basename 指定第二个参数来获取不带扩展名的文件名：
console.log("文件名：", path.basename(test, path.extname(test)));



// 使用路径
// 可以使用 path.join() 链接路径的两个或多个部分：
const name = "test";
console.log("拼接路径：", path.join("/", "users", name, "test.txt"));

// 可以使用 path.resolve() 获取相对路径的绝对路径计算：
console.log("绝对路径：", path.resolve("test.txt"));
// 如果用两个参数，第一个没有斜杠（/），则在文件前面加上第一个参数
console.log("绝对路径：", path.resolve("etc", "test.txt"));
// 如果第一个参数前面有斜杠（/） ，则表示它是绝对路径
console.log("绝对路径：", path.resolve("/etc", "test.txt"));


// path.normalize() 是另一个有用的函数，当它包含相对说明符（如 . 或 ..）或双斜杠时，它将尝试计算实际路径：
console.log(path.normalize("/3.操作文件/../1.Node.js文件统计信息/index.js"));




