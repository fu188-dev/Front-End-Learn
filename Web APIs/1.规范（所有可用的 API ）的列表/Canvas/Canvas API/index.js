const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 填充背景色
ctx.fillStyle = "red";

// 绘制矩形：fillRect(x, y, width, height);
ctx.fillRect(10, 10, 150, 100);