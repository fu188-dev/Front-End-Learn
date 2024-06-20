// 简单按钮
const easy = document.querySelector(".easy");
const p = document.querySelector(".p");

easy.addEventListener("click", () => {
  if(easy.value === "开动机器") {
    easy.value = "停止机器";
    p.textContent = "机器启动了！";
  } else {
    easy.value = "开动机器";
    p.textContent = "机器已经停下了。";
  }
});


// 设置禁用属性
const set = document.querySelector(".set");

set.addEventListener("click", () => {
  set.disabled = true;
  set.value = "已禁用";
  setTimeout(() => {
    set.disabled = false;
    set.value = "已启用";
  }, 1000)
});


// 继承禁用属性
const btn = document.querySelector(".btn");
const box = document.querySelector(".box");

btn.addEventListener("click", () => {
  box.disabled = true;
  setTimeout(() => {
    box.disabled = false;
  }, 1000)
});