function draw() {
  // 检查支持性
  var canvas = document.getElementById("canvas");

  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    // 这里就可以写你想要的代码啦~~~

    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = "rgba(200, 0, 0, .5)";
    ctx.fillRect(70, 10, 50, 50);


  } else {
    alert("你的浏览器不支持 canvas，请更换浏览器再使用。");
  }
}
