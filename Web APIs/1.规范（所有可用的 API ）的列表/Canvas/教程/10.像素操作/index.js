
function draw() {
  drawBall();
}
function drawBall() {
  // 检查支持性
  const canvas = document.getElementById("canvas");

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    // 这里就可以写你想要的代码啦~~~

  } else {
    alert("你的浏览器不支持 canvas，请更换浏览器再使用。");
  }
}

