
function draw() {
  drawSolarSystem();
  requestAnimationFrame(drawClock);
  drawPanorama();
  drawMouseTracking();
}

function drawSolarSystem() {
  // 检查支持性
  const canvas = document.getElementById("canvas");

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    // 这里就可以写你想要的代码啦~~~

    const sun = new Image();
    const earth = new Image();
    const moon = new Image();

    function init() {
      sun.src = "./images/sun.png";
      earth.src = "./images/earth.png";
      moon.src = "./images/moon.png";
      requestAnimationFrame(drawAnm); // 一般每秒执行 60 次，也可以理解成是 60 帧。
    };
    function drawAnm() {
      ctx.globalCompositeOperation = "destination-over"; // 在现有的画布内容后面绘制新的图形。
      ctx.clearRect(0, 0, canvas.width, canvas.height); // 首先，清除画布内容

      ctx.fillStyle = "rgb(0 0 0 / 80%)"; // 设置填充颜色
      ctx.strokeStyle = "rgb(0 153 255 / 40%)"; // 设置边框填充颜色
      ctx.save(); // 保存状态
      ctx.translate(canvas.width / 2, canvas.height / 2); // 移动 canvas 原点到 canvas 中心

      // earth
      const time = new Date();
      ctx.rotate(
        // getSeconds：根据本地时间，返回一个指定的日期对象的秒数。0~59 的整数。
        // getMilliseconds：根据本地时间，返回一个指定的日期对象的毫秒数。0~999 的整数。
        ((2 * Math.PI) / 60) * time.getSeconds()
         + 
        ((2 * Math.PI) / 60000) * time.getMilliseconds() 
      ); // 以原点为中心顺时针旋转，

      ctx.translate(120, 0); // 移动 canvas 原点
      // ctx.fillRect(0, -12, 40, 24); // 阴影
      ctx.drawImage(earth, -20, -20, 40, 40);

      ctx.save();

      ctx.rotate(
        ((2 * Math.PI) / 6) * time.getSeconds() +
        ((2 * Math.PI) / 6000) * time.getMilliseconds(),
      );
      ctx.translate(26, 0);
      ctx.drawImage(moon, -3.5, -3.5, 20, 20);

      ctx.restore();
      ctx.restore();

      // 地球轨道
      ctx.beginPath();
      ctx.arc(150, 150, 120, 0, Math.PI * 2, false); 
      ctx.stroke();
    
      ctx.drawImage(sun, canvas.width / 4, canvas.height / 4, canvas.width / 2, canvas.height / 2);
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    
      requestAnimationFrame(drawAnm); // 一般每秒执行 60 次，也可以理解成是 60 帧。

    };
    init();
  } else {
    alert("你的浏览器不支持 canvas，请更换浏览器再使用。");
  }
}

function drawClock() {
  // 检查支持性
  const canvas = document.getElementById("canvas2");

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    // 这里就可以写你想要的代码啦~~~
    const now = new Date();
    ctx.save();
    ctx.clearRect(0, 0, 300, 300);
    ctx.translate(150, 150); // 移动原点
    // ctx.scale(0.8, 0.8); // 缩小
    ctx.rotate(-Math.PI / 2);
    ctx.strokeStyle = "black";
    ctx.fillStyle = "white";
    ctx.lineWidth = 6;
    ctx.lineCap = "round";

    // 小时刻度
    ctx.save();
    for (let i = 0; i < 12; i++) {
      ctx.beginPath();
      ctx.rotate(Math.PI / 6);
      ctx.moveTo(80, 0);
      ctx.lineTo(100, 0);
      ctx.stroke();
    }
    ctx.restore();

    // 分钟刻度
    ctx.save();
    ctx.lineWidth = 4;
    for (let i = 0; i < 60; i++) {
      if(i % 5 !== 0) {
        ctx.beginPath();
        ctx.moveTo(90, 0);
        ctx.lineTo(100, 0);
        ctx.stroke();
      }
      ctx.rotate(Math.PI / 30);
    }
    ctx.restore()

    // const s = now.getSeconds(); // 获取当前秒数
    const s = now.getSeconds() + now.getMilliseconds() / 1000; // 获取当前秒数
    const m = now.getMinutes(); // 获取当前分钟数
    const h = now.getHours() % 12; // 获取当前小时数

    ctx.fillStyle = "black";
    // 显示图像描述
    ctx.fillText = (`当前时间：${h}:${m}:${s}`, 100, 100);
    ctx.font = "48px sans-serif";
    ctx.fill();

    // 时针
    ctx.save();
    ctx.rotate((Math.PI / 6) * h + (Math.PI / 360) * m + (Math.PI / 21600) * s);
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(60, 0);
    ctx.stroke();
    ctx.restore();

    // 分针
    ctx.save();
    ctx.rotate((Math.PI / 30) * m + (Math.PI / 1800) * s);
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(80, 0);
    ctx.stroke();
    ctx.restore();

    // 秒针
    ctx.save();
    ctx.rotate((Math.PI * s) / 30);
    ctx.strokeStyle = "green"
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(90, 0);
    ctx.stroke();
    ctx.lineWidth = 6;
    ctx.strokeStyle = "black"
    ctx.restore();

    ctx.beginPath();
    ctx.arc(0, 0, 100, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();

    requestAnimationFrame(drawClock);


  } else {
    alert("你的浏览器不支持 canvas，请更换浏览器再使用。");
  }
}
function drawPanorama() {
  // 检查支持性
  const canvas = document.getElementById("canvas3");

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    // 这里就可以写你想要的代码啦~~~
    
    const img = new Image();
    img.src = "./images/open.jpg";
    let canvasXSize = 800;
    let canvasYSize = 800;
    const speed = 30;
    const y = -4.5;

    const dx = 0.75;
    let imgW;
    let imgH;
    let x = 0;
    let clearX;
    let clearY;

    img.onload = function() {
      imgW = img.width;
      imgH = img.height;

      if(imgW > canvasXSize) {
        x = canvasXSize - imgW;
      };

      if(imgW > canvasXSize) {
        clearX = imgW;
      } else {
        clearX = canvasXSize;
      }

      if(imgH > canvasYSize) {
        clearY = imgH;
      } else {
        clearY = canvasYSize;
      }

      setInterval(() => {
        ctx.clearRect(0, 0, clearX, clearY);
      
        if(imgW <= canvasXSize) {
          if(x > canvasXSize) {
            x = -imgW + x;
          }

          if(x > 0) {
            ctx.drawImage(img, -imgW + x, y, imgW, imgH);
          }

          if(x - imgW > 0) {
            ctx.drawImage(img, imgW * 2 + x, y, imgW, imgH);
          }
        } else {
          // reset, start from beginning
          if (x > canvasXSize) {
            x = canvasXSize - imgW;
          }

          // draw aditional image
          if (x > canvasXSize - imgW) {
            ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
          }
        }

        ctx.drawImage(img, x, y, imgW, imgH);
        x += dx;

      }, speed);
    };
    

  } else {
    alert("你的浏览器不支持 canvas，请更换浏览器再使用。");
  }
}


function drawMouseTracking() {
  // 检查支持性
  const canvas = document.getElementById("canvas4");

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    // 这里就可以写你想要的代码啦~~~
    
    let cn;
    let u = 10;
    // 鼠标的坐标点
    const m = {
      x: innerWidth / 2,
      y: innerHeight / 2,
    };

    // 设置鼠标坐标点
    window.onmousemove = function(e) {
      m.x = e.clientX;
      m.y = e.clientY;
    };

    // 返回一个随机十六进制颜色值
    function gc() {
      let s = "0123456789ABCDEF"; // 十六进制
      let c = "#"; // 十六进制
      for (let i = 0; i < 6; i++) {
        // Math.ceil()：向上取整；
        c += s[Math.ceil(Math.random() * 15)]; // 小于或等于 15 的整数
      }
      return c;
    }

    const a = [];
    for (let i = 0; i < 10; i++) {
      let r = 30;
      let x = Math.random() * (innerWidth - 2 * r) + r;
      let y = Math.random() * (innerHeight - 2 * r) + r;
      let t = new ob(
        innerWidth / 2, innerHeight / 2, 5 ,"red", Math.random() * 200 + 20, 2
      );
      a.push(t);
    }

    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.5;

    resize();
    anim();

    window.onresize = function() {
      resize();
    }

    function resize() {
      canvas.height = innerHeight;
      canvas.width = innerWidth;
      for (let i = 0; i < 101; i++) {
        let r = 30;
        let x = Math.random() * (innerWidth - 2 * r) + r;
        let y = Math.random() * (innerHeight - 2 * r) + r;
        a[i] = new ob(
          innerWidth / 2,
          innerHeight / 2,
          4,
          gc(),
          Math.random() * 200 + 20,
          0.02,
        );
      }
    }
    function ob(x, y, r, cc, o, s) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.cc = cc;
      this.o = o;
      this.s = s;
      this.theta = Math.random() * Math.PI * 2;
      this.t = Math.random() * 150;

      this.dr = function() {
        const ls = {
          x: this.x,
          y: this.y,
        };

        this.theta += this.s;
        this.x = m.x + Math.cos(this.theta) * this.t;
        this.y = m.y + Math.sin(this.theta) * this.t;
        ctx.beginPath();
        ctx.lineWidth = this.r;
        ctx.strokeStyle = this.cc;
        ctx.moveTo(ls.x, ls.y);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
        ctx.closePath();
      }


    }
    function anim() {
      requestAnimationFrame(anim);
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      a.forEach(function (e, i) {
        e.dr();
      });
    }


  } else {
    alert("你的浏览器不支持 canvas，请更换浏览器再使用。");
  }
}




