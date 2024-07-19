
function draw() {
  drawSelectColor();
  drawUpdatePic();
  drawMagnifier();
}
function drawSelectColor() {
  // 检查支持性
  const canvas = document.getElementById("canvas");

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    // 这里就可以写你想要的代码啦~~~

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = "./images/cat.jpg";
    img.onload = function() {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      img.style.display = "none";
    };

    const hoverColor = document.querySelector(".hover-color");
    const selectColor = document.querySelector(".selected-color");
    hoverColor.style.height = canvas.height + "px";
    hoverColor.style.margin = "0 10px";
    selectColor.style.height = canvas.height + "px";

    function pick(event, destination) {
      const x = event.offsetX; // 鼠标指针在元素内的 x 轴坐标
      const y = event.offsetY; // 鼠标指针在元素内的 y 轴坐标
      const pixel = ctx.getImageData(x, y, 1, 1);
      const data = pixel.data;

      const rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`;
      destination.style.background = rgba;
      destination.innerText = rgba;

      return rgba;
    };
    canvas.addEventListener("mousemove", function(e) {
      pick(e, hoverColor);
    });
    canvas.addEventListener("click", function(e) {
      pick(e, selectColor);

    });
  } else {
    alert("你的浏览器不支持 canvas，请更换浏览器再使用。");
  }
}

function drawUpdatePic() {
  // 检查支持性
  const canvas = document.getElementById("canvas2");

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    // 这里就可以写你想要的代码啦~~~

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = "./images/cat.jpg";
    img.onload = function() {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      img.style.display = "none";
    };


    const resetBtn = document.querySelector(".reset");
    const grayBtn = document.querySelector(".gray");
    const reverseBtn = document.querySelector(".reverse");
    const maskingBtn = document.querySelector(".masking");
    const savegBtn = document.querySelector(".save");
    

    // 还原
    resetBtn.addEventListener("click", function() {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    });

    // 置灰
    grayBtn.addEventListener("click", function() {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      console.log(imageData);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const gray = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = gray;
        data[i + 1] = gray;
        data[i + 2] = gray;
      }
      ctx.putImageData(imageData, 0, 0);      
    });

    // 反向
    reverseBtn.addEventListener("click", function() {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      // 获取绘制了图片的 canvas 数据
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      console.log(imageData);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        data[i] = 255 - data[i];
        data[i + 1] = 255 - data[i + 1];
        data[i + 2] = 255 - data[i  + 2];
      }
      ctx.putImageData(imageData, 0, 0);
    });

    // 遮罩
    maskingBtn.addEventListener("click", function() {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      // 获取绘制了图片的 canvas 数据
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      console.log(imageData);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        data[i + 3] = 125;
      }
      ctx.putImageData(imageData, 0, 0);
    });

    // 保存
    savegBtn.addEventListener("click", function() {
      const url = canvas.toDataURL();
      const a = document.createElement("a");
      a.href = url;
      a.download = "pic.png";
      a.click();
    });
  } else {
    alert("你的浏览器不支持 canvas，请更换浏览器再使用。");
  }
}

function drawMagnifier() {
  // 检查支持性
  const canvas = document.getElementById("canvas3");

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    // 这里就可以写你想要的代码啦~~~

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = "./images/cat.jpg";
    img.onload = function() {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      img.style.display = "none";
    };

    function clear() {
      // ctx.fillStyle = "rgba(255,255,255,0)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgba(0, 0, 0, .1)";

    const manifier = document.getElementById("canvas4").getContext("2d");

    canvas.addEventListener("mousemove", function(e) {
      // 这里清除是因为我给加了一个方框，为了方便查看
      clear();
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const x = e.offsetX < 50 ? 50 : e.offsetX > 950 ? 950 : e.offsetX;
      const y = e.offsetY < 50 ? 50 : e.offsetY > 450 ? 450 : e.offsetY;
      ctx.strokeRect(Math.abs(x - 50), Math.abs(y - 50), 100, 100);
      manifier.drawImage(
        canvas,
        Math.abs(x - 50), // 裁剪 canvas 的 x 轴坐标点，这里取绝对值
        Math.abs(y - 50), // 裁剪 canvas 的 y 轴坐标点，这里取绝对值
        100, // canvas 裁剪的宽度
        100, // canvas 裁剪的高度
        0, // 需要将 canvas 绘制到目标 canvas 的 x 轴坐标点
        0, // 需要将 canvas 绘制到目标 canvas 的 y 轴坐标点
        200, // 需要将 canvas 绘制到目标 canvas 的宽度。如果裁剪的宽度小于实际绘制的宽度，将会放大；如果裁剪的宽度大于实际绘制的宽度，将会缩小；相等则不变；
        200, // 需要将 canvas 绘制到目标 canvas 的高度度。如果裁剪的高度小于实际绘制的高度，将会放大；如果裁剪的高度大于实际绘制的高度，将会缩小；相等则不变；
      );
    });

    const smoothbtn = document.getElementById("smoothbtn");
    smoothbtn.addEventListener("change", function(e) {
      manifier.imageSmoothingEnabled = e.checked; // 布尔值；表示是否对缩放的图像进行平滑处理。true：平滑处理（默认值）；false：不进行处理；
      manifier.mozImageSmoothingEnabled = e.checked;
      manifier.webkitImageSmoothingEnabled = e.checked;
      manifier.msImageSmoothingEnabled = e.checked;
    });
    
  } else {
    alert("你的浏览器不支持 canvas，请更换浏览器再使用。");
  }
}




