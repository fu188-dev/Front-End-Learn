function draw() {
  // 检查支持性
  var canvas = document.getElementById("canvas");

  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    // 这里就可以写你想要的代码啦~~~
    // fillStyle 设置填充颜色示例
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        ctx.fillStyle = `rgb(${Math.floor(255 - 42.5*i)},${Math.floor(255 - 42.5 * j)},0)`;
        ctx.fillRect(j * 25, i * 25, 25, 25);
      }
    }

    // strokeStyle 设置边框颜色示例
    for (let i = 0; i < 6; i++) {
      for (let j = 8; j < 14; j++) {
        ctx.strokeStyle = `rgb(${Math.floor(255 - 42.5*i)},${Math.floor(255 - 10 * j)},0)`;
        ctx.beginPath();
        ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
        ctx.stroke();
      }
    }

    // globalAlpha 示例
    ctx.fillStyle = "#F00";
    ctx.fillRect(0, 160, 80, 80);
    ctx.fillStyle = "#0F0";
    ctx.fillRect(80, 160, 80, 80);
    ctx.fillStyle = "#00F";
    ctx.fillRect(80, 240, 80, 80);
    ctx.fillStyle = "#0FF";
    ctx.fillRect(0, 240, 80, 80);

    // 设置接下来的图形的透明度
    ctx.globalAlpha = 0.2;
    ctx.fillStyle = "orange";

    for (let q = 0; q < 8; q++) {
      ctx.beginPath();
      ctx.arc(80, 240, 10 + 10 * q, 0, Math.PI * 2, true);
      ctx.fill();
    }


    // rgba 示例
    ctx.globalAlpha = 1;
    ctx.fillStyle = "#F00";
    ctx.fillRect(0, 340, 100, 50);
    ctx.fillStyle = "#0F0";
    ctx.fillRect(0, 390, 100, 50);
    ctx.fillStyle = "#00F";
    ctx.fillRect(0, 440, 100, 50);
    ctx.fillStyle = "orange";
    ctx.fillRect(0, 490, 100, 50);

    for (let w = 0; w < 10; w++) {
      ctx.fillStyle = "rgba(255,255,255," + (w + 1) / 10 + ")";
      for (let e = 0; e < 4; e++) {
        ctx.fillRect(w * 10, 345 + e * 50, 10, 40);
      }    
    }


    // lineWidth 属性示例
    ctx.strokeStyle = "black";
    for (let i = 0; i < 10; i++) {
      ctx.lineWidth = 1 + i;
      ctx.beginPath();
      ctx.moveTo(5 + i * 12, 550); // 设置开始点
      ctx.lineTo(5 + i * 12, 650);
      ctx.stroke();
      ctx.closePath();
    }

    //lineCap 属性示例
    // 设置一条基准线，方便查看区别
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#09f";
    ctx.beginPath();
    ctx.moveTo(0, 670);
    ctx.lineTo(200, 670);
    ctx.moveTo(0, 770);
    ctx.lineTo(200, 770);
    ctx.stroke();

    const lineCapTypes = ["butt", "round", "square"];
    ctx.strokeStyle = "#000";
    for (let i = 0; i < 3; i++) {
      ctx.lineWidth = 15;
      ctx.lineCap = lineCapTypes[i];
      ctx.beginPath();
      ctx.moveTo(30 + i * 40, 670);
      ctx.lineTo(30 + i * 40, 770);
      ctx.stroke();
      ctx.closePath();
    }



    // lineJoin 属性示例
    const lineJoinTypes = ["round", "bevel", "miter"];
    ctx.lineWidth = 10;
    for (let i = 0; i < lineJoinTypes.length; i++) {
      ctx.lineJoin = lineJoinTypes[i];
      ctx.beginPath();
      ctx.moveTo(190, 170 + i * 40);
      ctx.lineTo(230, 215 + i * 40);
      ctx.lineTo(270, 170 + i * 40);
      ctx.lineTo(310, 215 + i * 40);
      ctx.lineTo(350, 170 + i * 40);
      ctx.stroke();
    }

    // miterLimit 属性示例


    // 虚线示例，使用 setLineDash 和 lineDashOffset 制定。


  } else {
    alert("你的浏览器不支持 canvas，请更换浏览器再使用。");
  }
}
function two() {
  // 检查支持性
  var canvas = document.getElementById("two");

  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
  } else {
    alert("你的浏览器不支持 canvas，请更换浏览器再使用。");
  }
}