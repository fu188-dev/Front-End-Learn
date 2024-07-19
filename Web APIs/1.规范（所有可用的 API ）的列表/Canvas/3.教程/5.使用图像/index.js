
function draw() {
  drawImage();
  drawImageScal();
  drawImageSection();
  drawImagePhotoFrame();
  drawImageGallery();
}

function drawImage() {
  // 检查支持性
  const canvas = document.getElementById("canvas");

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    // 这里就可以写你想要的代码啦~~~
    const img = new Image();
    img.src = "./images/cat.jpg";
    img.onload = function() {
      ctx.drawImage(img, 0, 0);
      ctx.beginPath();
      ctx.moveTo(30, 30);
      ctx.lineTo(60, 90);
      ctx.lineTo(90, 60);
      ctx.lineTo(120, 110);
      ctx.stroke();
    };
  } else {
    alert("你的浏览器不支持 canvas，请更换浏览器再使用。");
  }
}
function drawImageScal() {
  // 检查支持性
  const canvas = document.getElementById("canvas2");

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    // 这里就可以写你想要的代码啦~~~
    const img = new Image();
    img.src = "./images/cat.jpg";
    img.onload = function() {
      ctx.drawImage(img, 25, 25, 150, 150);
      ctx.drawImage(img, 200, 25, 375, 150);
      ctx.beginPath();
      ctx.moveTo(30, 30);
      ctx.lineTo(60, 90);
      ctx.lineTo(90, 60);
      ctx.lineTo(120, 110);
      ctx.stroke();
    };
  } else {
    alert("你的浏览器不支持 canvas，请更换浏览器再使用。");
  }
}
function drawImageSection() {
  // 检查支持性
  const canvas = document.getElementById("canvas3");

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    // 这里就可以写你想要的代码啦~~~
    const img = new Image();
    img.src = "./images/cat.jpg";
    img.onload = function() {
      ctx.drawImage(img, 25, 25, 1000, 400, 25, 25, 150, 150);
    };
  } else {
    alert("你的浏览器不支持 canvas，请更换浏览器再使用。");
  }
}
function drawImagePhotoFrame() {
  // 检查支持性
  const canvas = document.getElementById("canvas4");

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    // 这里就可以写你想要的代码啦~~~
    const source = document.getElementById("source");
    const frame = document.getElementById("frame");

    // 因为这里素材不太行，所有看不出效果
    ctx.drawImage(source, 250, 25, 1000, 800, 25, 25, 900, 800);
    ctx.drawImage(frame, 0, 0);
  } else {
    alert("你的浏览器不支持 canvas，请更换浏览器再使用。");
  }
}

function drawImageGallery() {
  // Loop through all images
  for (i = 0; i < document.images.length-1; i++) {
    // Don't add a canvas for the frame image
    if (document.images[i].getAttribute("id") != "frames") {
      // Create canvas element
      const canvas = document.createElement("canvas");
      canvas.setAttribute("width", 240);
      canvas.setAttribute("height", 200);

      // Insert before the image
      document.images[i].parentNode.insertBefore(canvas, document.images[i]);

      const ctx = canvas.getContext("2d");
      // 这里是相框，因为相框不是透明的，所以先绘制相框，然后再绘制图片，让图片在相框上面
      ctx.drawImage(document.getElementById("frames"), 0, 0);

      // Draw image to canvas
      ctx.drawImage(document.images[i], 15, 20);


    }
  }
}