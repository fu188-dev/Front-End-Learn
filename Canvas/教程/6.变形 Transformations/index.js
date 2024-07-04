
function draw() {
  drawTransform();
  drawTranslate();
  drawRotaging();
  drawScale();
  drawBx();
}

function drawTransform() {
  // 检查支持性
  const canvas = document.getElementById("canvas");

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    // 这里就可以写你想要的代码啦~~~

    ctx.fillRect(0, 0, 200, 200); // 使用默认设置绘制一个矩形
    ctx.save(); // 保存默认状态

    ctx.fillStyle = "rgb(255, 125, 0)"; // 在原有配置上改变颜色
    ctx.fillRect(20, 20, 160, 160); // 再绘制一个橙色矩形
    ctx.save(); // 保存当前状态

    ctx.fillStyle = "white"; // 再次改变颜色
    ctx.globalAlpha = 0.5; // 添加透明度
    ctx.fillRect(40, 40, 120, 120); // 然后再绘制一个白色透明矩形


    ctx.restore(); // 重置到之前橙色的状态
    ctx.fillRect(60, 60, 80, 80); // 所以现在绘制的是橙色的矩形

    ctx.restore(); // 再次重置，就是最初默认的颜色
    ctx.fillRect(80, 80, 40, 40); // 所以现在绘制的是黑色的矩形



  } else {
    alert("你的浏览器不支持 canvas，请更换浏览器再使用。");
  }
}
function drawTranslate() {
  // 检查支持性
  const canvas = document.getElementById("canvas2");

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    // 这里就可以写你想要的代码啦~~~
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        ctx.save(); // 保存初始状态，平移前的状态
        ctx.fillStyle = `rgb(${255}, ${51 * i}, ${255 - 51 * i} )`;
        // 10, 10; 60, 10; 110, 10;
        // 10, 60; 60, 60; 110, 60;
        // 10, 110; 60, 110; 110, 110;
        ctx.translate(10 + j * 50, 10 + i * 50);
        ctx.fillRect(0, 0, 25, 25); // 因为我们移动的是canvas(有点抽象)，所以是 0, 0
        ctx.restore(); // 重置会初始的状态
      }      
    }

  } else {
    alert("你的浏览器不支持 canvas，请更换浏览器再使用。");
  }
}
function drawRotaging() {
  // 检查支持性
  const canvas = document.getElementById("canvas3");

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    // 这里就可以写你想要的代码啦~~~
    
    ctx.save(); // 保存初始状态，方便后面恢复
    ctx.fillStyle = "orange"; // 设置背景填充颜色为橙色
    ctx.fillRect(100, 30, 100, 100); // 画一个正方形

    ctx.rotate((Math.PI / 180) * 25);
    ctx.fillStyle = "red"; // 设置背景填充颜色为红色，即后面渲染的图形的背景色
    ctx.fillRect(100, 30, 100, 100); // 填充一个红色的矩形

    ctx.restore(); // 重置到初始状态

    ctx.fillStyle = "green"; // 设置背景填充颜色为绿色
    ctx.fillRect(300, 30, 100, 100); // 画一个正方形，绿色的

    ctx.translate(350, 80); // 将原点移动到上面的正方形的中心
    ctx.rotate((Math.PI / 180) * 25); // 然后以原点为中心进行旋转
    ctx.fillStyle = "blue"; // 设置背景填充色为蓝色
    ctx.fillRect(0, 0, 100, 100); // 最后画一个正方形



  } else {
    alert("你的浏览器不支持 canvas，请更换浏览器再使用。");
  }
}
function drawScale() {
  // 检查支持性
  const canvas = document.getElementById("canvas4");

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    // 这里就可以写你想要的代码啦~~~
    
    ctx.save(); // 保存初始状态，方便后面重置
    ctx.fillStyle = "orange"; // 设置填充背景色为橙色
    ctx.scale(2, 2); // 放大一倍
    ctx.fillRect(10, 10, 50, 50);
    ctx.restore(); // 重置回初始状态

    ctx.scale(-1, 1); // 沿着 x 轴反转
    ctx.font = "48px serif";
    ctx.textBaseline = "hanging";
    ctx.fillText("Hello", -250, 100);


  } else {
    alert("你的浏览器不支持 canvas，请更换浏览器再使用。");
  }
}
function drawBx() {
  // 检查支持性
  const canvas = document.getElementById("canvas5");

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    // 这里就可以写你想要的代码啦~~~

    const sin = Math.sin(Math.PI / 6); // 这里我也没太懂，三角函数不会了
    const cos = Math.cos(Math.PI / 6); // 这里我也没太懂，三角函数不会了

    ctx.translate(100, 100); // 将原点平移到 100, 100 的位置。

    for (let i = 0; i < 12; i++) {
      ctx.fillStyle= `rgb(${10 * i}, ${20 * i}, 0)`;
      ctx.fillRect(0,0,100,10);
      ctx.transform(cos, sin, -sin, cos, 0, 0);
    }

    ctx.setTransform(-1, 0, 0, 1, 100, 100);
    ctx.fillStyle = "rgba(255, 128, 255, 0.5)";
    ctx.fillRect(0, 50, 100, 100);
  } else {
    alert("你的浏览器不支持 canvas，请更换浏览器再使用。");
  }
}