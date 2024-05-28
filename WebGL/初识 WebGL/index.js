function main() {
    const canvas = document.querySelector("#glcanvas");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    

    // 初始化 WebGL 上下文
    const gl = canvas.getContext("webgl");
    debugger;
    // 确认 WebGL 支持性
    if(!gl) {
        alert("无法初始化 WebGL，你的浏览器、操作系统或硬件等可能不支持 WebGL。");
        return;
    }
}