
function draw() {
  drawBall();
}
function drawBall() {
  // 检查支持性
  const canvas = document.getElementById("canvas");
  let raf;
  let running = false;

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    // 这里就可以写你想要的代码啦~~~

    ctx.fillText("鼠标移动小球，单击鼠标左键试试", 10, 10);
    const ball = {
      x: 100,
      y: 100,
      vx: 5,
      vy: 1,
      radius: 25,
      color: "orange",
      draw: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
      },
    };
    function clear() {
      ctx.fillStyle = "rgba(255,255,255,0.3)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    function draw() {
      clear();
      // ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
      // ctx.fillRect(0, 0, canvas.width, canvas.height);
      // ctx.clearRect(0, 0, canvas.width, canvas.height);
      ball.draw();
      ball.x += ball.vx;
      ball.y += ball.vy;

      // 加速度
      // 这会逐渐减少垂直方向的速度
      // ball.vy *= 0.99;
      // ball.vy += 0.25;

      // 边界碰撞检测
      if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
        ball.vy = -ball.vy;
      }
      if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
        ball.vx = -ball.vx;
      }
      
      raf = window.requestAnimationFrame(draw);
    }

    canvas.addEventListener("mousemove", function(e) {
      if(!running) {
        clear();
        ball.x = e.offsetX;
        ball.y = e.offsetY;
        ball.draw();
      }
    });


    canvas.addEventListener("click", function(e) {
      if(!running) {
        raf = window.requestAnimationFrame(draw);
        running = true;
      }
    });

    canvas.addEventListener("mouseout", function(e) {
      window.cancelAnimationFrame(raf);
      running = false;
    });


    ball.draw();
  } else {
    alert("你的浏览器不支持 canvas，请更换浏览器再使用。");
  }
}

