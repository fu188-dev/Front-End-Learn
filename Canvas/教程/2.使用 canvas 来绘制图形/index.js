function draw() {
  // 检查支持性
  var canvas = document.getElementById("canvas");

  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    // 这里就可以写你想要的代码啦~~~
    ctx.fillText("创建矩形，清理矩形区域", 10, 8);
    ctx.fillRect(10, 10, 90, 90);
    ctx.clearRect(30, 30, 50, 50);

    ctx.strokeRect(110, 10, 90, 90);
    ctx.clearRect(109, 9, 90, 90);

    ctx.beginPath();
    ctx.arc(275, 75, 50, 0, Math.PI * 2, true); // 绘制
    ctx.moveTo(310, 75);
    ctx.arc(275, 75, 35, 0, Math.PI, false); // 口 (顺时针)
    ctx.moveTo(265, 65);
    ctx.arc(260, 65, 5, 0, Math.PI * 2, true); // 左眼
    ctx.moveTo(295, 65);
    ctx.arc(290, 65, 5, 0, Math.PI * 2, true); // 右眼
    ctx.stroke();

    ctx.fillText("绘制三角形：beginPath(),moveTo(),lineTo(),fill()", 10, 110);
    ctx.beginPath();
    ctx.moveTo(10, 120);
    ctx.lineTo(100, 120);
    ctx.lineTo(55, 180);
    ctx.fill();

    ctx.fillText("绘制三角形：beginPath(),moveTo(),lineTo(),closePath(),stroke()", 10, 190);
    ctx.beginPath();
    ctx.moveTo(10, 200);
    ctx.lineTo(100, 200);
    ctx.lineTo(55, 260);
    ctx.closePath();
    ctx.stroke();

    cir();
  } else {
    alert("你的浏览器不支持 canvas，请更换浏览器再使用。");
  }
}

function cir() {
    // 检查支持性
    var canvas = document.getElementById("two");

    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 3; j++) {
          ctx.beginPath();
          var x = 25 + j * 50; // x 坐标值
          var y = 25 + i * 50; // y 坐标值
          var radius = 20; // 圆弧半径
          var startAngle = 0; // 开始点
          var endAngle = Math.PI + (Math.PI * j) / 2; // 结束点
          var anticlockwise = i % 2 == 0 ? false : true; // 顺时针或逆时针
  
          ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
  
          if (i > 1) {
            ctx.fill();
          } else {
            ctx.stroke();
          }
        }
      }

      // 二次贝塞尔曲线
      ctx.beginPath();
      ctx.moveTo(200, 50);
      ctx.quadraticCurveTo(250, 25, 300, 50);
      ctx.stroke();


      ctx.rect(200, 10, 50, 50);
      ctx.stroke();
  

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