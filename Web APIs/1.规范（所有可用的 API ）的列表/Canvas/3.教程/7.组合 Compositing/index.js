
function draw() {
  drawClip();
}

function drawClip() {
  // 检查支持性
  const canvas = document.getElementById("canvas");

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    // 这里就可以写你想要的代码啦~~~

    ctx.fillRect(0, 0, 200, 200);
    ctx.translate(100, 100); // 将原点移动到 canvas 的中心。

    // ctx.beginPath();
    ctx.arc(0, 0, 100, 0, Math.PI * 2, true);
    ctx.clip(); // 创建一个圆形的裁剪区域。

    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 180, 180);
    
    const linGrad = ctx.createLinearGradient(0, -100, 0, 100); // 创建线性渐变的区域
    linGrad.addColorStop(0, "#232256");
    linGrad.addColorStop(1, "#143778");
    // linGrad.addColorStop(1, "orange");

    ctx.fillStyle = linGrad;
    ctx.fillRect(-100, -100, 200 ,200); // 填充一个矩形，这里就可以可看出，正方形已经被裁切了，多余的部分被遮住了。

    for (let i = 0; i < 50; i++) {
      ctx.save();
      ctx.fillStyle = "white";
      ctx.translate(
        100 - Math.floor(Math.random() * 200), // 100 - 小于200的数 = -100到100之间
        100 - Math.floor(Math.random() * 200), // 100 - 小于200的数 = -100到100之间
      );
      drawStar(ctx, Math.floor(Math.random() * 4) + 5);
      ctx.restore(); // 重置
    }
    function drawStar(ctx, r) {
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(r, 0);
      for (let i = 0; i < 9; i++) {
        ctx.rotate(Math.PI / 5); // 圆周率 PI = 180度， 这里除以5等于36度
        if(i % 2 == 0) {
          ctx.lineTo((r / 0.525731) * 0.200811, 0);
        } else {
          ctx.lineTo(r, 0);
        }
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };
  } else {
    alert("你的浏览器不支持 canvas，请更换浏览器再使用。");
  }
}