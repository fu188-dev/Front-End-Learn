var offset = 0;

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
    ctx.lineWidth = 1;
    ctx.setLineDash([20, 30]);
    ctx.beginPath();
    ctx.moveTo(190, 350);
    ctx.lineTo(390, 350);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.lineDashOffset = -10;
    ctx.moveTo(190, 380);
    ctx.lineTo(390, 380);
    ctx.stroke();

    march();
    function march() {
      offset--;
      if (offset < -16) {
        offset = 0;
      }
      drawOne();
      setTimeout(march, 20);
    }
    function drawOne() {
      ctx.strokeStyle = "black";
      ctx.clearRect(189, 399, 102, 102);
      ctx.setLineDash([4, 2]);
      ctx.lineDashOffset = -offset;
      ctx.strokeRect(190, 400, 100, 100);
    }

    ctx.setLineDash([0, 0]);
    // createLinearGradient（线性渐变） 示例
    const lingrad = ctx.createLinearGradient(200, 510, 300, 510);
    lingrad.addColorStop(0, "#00ABEB");
    lingrad.addColorStop(0.5, "#FFFFFF");
    lingrad.addColorStop(1, "#26C000");

    const lingrad2 = ctx.createLinearGradient(220, 530, 220, 570);
    lingrad2.addColorStop(0, "#0F0");
    lingrad2.addColorStop(1, "rgba(0, 0, 0, 0)"); // 设置为透明度 rgba
    // lingrad2.addColorStop(1, "#00F");

    ctx.fillStyle = lingrad; // 设置背景颜色渐变
    ctx.fillRect(200, 510, 100, 100);

    ctx.strokeStyle = lingrad2; // 设置边框颜色渐变
    ctx.strokeRect(220, 530, 40, 40);


    // createRadialGradient（径向渐变） 示例
    const radgrad = ctx.createRadialGradient(320, 650, 4, 330, 660, 30);
    radgrad.addColorStop(0, "#A7D30C");
    radgrad.addColorStop(0.9, "#019F62");
    radgrad.addColorStop(1, "rgba(1,159,98, .1)");

    ctx.fillStyle = radgrad;
    ctx.fillRect(300, 630, 100, 100);


    const radgrad2 = ctx.createRadialGradient(370, 700, 4, 360, 710, 30);
    radgrad2.addColorStop(0, "#FFFFFF");
    radgrad2.addColorStop(0.9, "#000000");
    radgrad2.addColorStop(1, "rgba(1,159,98,0)");

    ctx.fillStyle = radgrad2;
    ctx.fillRect(300, 630, 100, 200);



    // createPattern 示例
    const img = new Image();
    img.src = "./images/canvas_createpattern.png";
    // 使用 onload 来确保设置图案之前图像已经加载完毕。
    img.onload = function() {
      // repeat：铺满整个容器；
      // repeat-x：第一行会显示；
      // repeat-y：不展示图片；
      // no-repeat：不展示图片了；
      const ptrn = ctx.createPattern(img, "repeat");
      ctx.fillStyle = ptrn;
      ctx.fillRect(400, 0, 300, 400);

    };

    
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