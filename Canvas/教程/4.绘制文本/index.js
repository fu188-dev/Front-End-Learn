
function draw() {
  drawText();
  drawTextStyle();
  getMeasureText();
}

function drawText() {
  // 检查支持性
  const canvas = document.getElementById("canvas");

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    // 这里就可以写你想要的代码啦~~~
    ctx.fillText("填充文本", 10, 10);
    ctx.fillText("有最大宽度", 10, 30, 30);

    ctx.strokeText("绘制文本边框", 10, 50);
    ctx.strokeText("绘制文本边框", 10, 70, 20);

    // 填充文本的示例
    ctx.font = "48px serif";
    ctx.fillText("示例", 10, 120);

    // 填充边框示例
    ctx.font = "48px serif";
    ctx.strokeText("示例", 10, 170);
  } else {
    alert("你的浏览器不支持 canvas，请更换浏览器再使用。");
  }
}

function drawTextStyle() {
  // 检查支持性
  const canvas = document.getElementById("canvas2");

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    // 这里就可以写你想要的代码啦~~~
    ctx.font = "10px caption";
    ctx.textAlign = "start";
    ctx.fillText("文本对齐方式", 30, 10);
    ctx.textAlign = "end";
    ctx.fillText("文本对齐方式", 30, 40);
    ctx.textAlign = "left";
    ctx.fillText("文本对齐方式", 30, 70);
    ctx.textAlign = "right";
    ctx.fillText("文本对齐方式", 30, 100);
    ctx.textAlign = "center";
    ctx.fillText("文本对齐方式", 30, 130);

    ctx.textBaseline = "alphabetic";
    ctx.fillText("基线对齐方式", 200, 10);
    ctx.textBaseline = "top";
    ctx.fillText("基线对齐方式", 260, 10);
    ctx.textBaseline = "hanging";
    ctx.fillText("基线对齐方式", 330, 10);
    ctx.textBaseline = "middle";
    ctx.fillText("基线对齐方式", 400, 10);
    ctx.textBaseline = "bottom";
    ctx.fillText("基线对齐方式", 480, 10);

    ctx.direction = "inherit";
    ctx.fillText("文本方向", 200, 60);
    ctx.direction = "ltr";
    ctx.fillText("文本方向", 200, 80);
    ctx.direction = "rtl";
    ctx.fillText("文本方向", 200, 100);



  } else {
    alert("你的浏览器不支持 canvas，请更换浏览器再使用。");
  }
}

function getMeasureText() {
  // 检查支持性
  const canvas = document.getElementById("canvas3");
  const span = document.querySelector(".info");

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    // 这里就可以写你想要的代码啦~~~
    ctx.font = "10px caption"; // 系统字体
    ctx.textBaseline = "hanging";
    ctx.fillText("测量文本岁的法国", 30, 10);
    let info = ctx.measureText("测量文本");
    console.log(info);
    ctx.fillText(`width(宽)：${info.width}`, 30, 30);
    ctx.fillText(`actualBoundingBoxLeft：${info.actualBoundingBoxLeft}`, 30, 50);
    ctx.fillText(`actualBoundingBoxRight：${info.actualBoundingBoxRight}`, 30, 70);
    ctx.fillText(`fontBoundingBoxAscent：${info.fontBoundingBoxAscent}`, 30, 90);
    ctx.fillText(`fontBoundingBoxDescent：${info.fontBoundingBoxDescent}`, 30, 110);
    ctx.fillText(`actualBoundingBoxAscent：${info.actualBoundingBoxAscent}`, 30, 130);
    ctx.fillText(`actualBoundingBoxDescent：${info.actualBoundingBoxDescent}`, 30, 150);
    ctx.fillText(`emHeightAscent：${info.emHeightAscent}`, 30, 180);
    ctx.fillText(`emHeightDescent：${info.emHeightDescent}`, 30, 210);
    ctx.fillText(`hangingBaseline：${info.hangingBaseline}`, 30, 230);
    ctx.fillText(`alphabeticBaseline：${info.alphabeticBaseline}`, 30, 250);
    ctx.fillText(`ideographicBaseline：${info.ideographicBaseline}`, 30, 280);

  } else {
    alert("你的浏览器不支持 canvas，请更换浏览器再使用。");
  }
}