const all = document.querySelector("#all");
const items = document.querySelectorAll("ul li input");

all.addEventListener("click", (e) => {
  e.preventDefault();
});

for (const iterator of items) {
  iterator.addEventListener("click", updateDisplay);
}

function updateDisplay() {
  // 定义选中的复选框计数器
  let count = 0;

  // 每次点击都统计选中的复选框数量
  for (const i of items) {
    if(i.checked) {
      count++;
    } 
  }

  // 如果一个都没有选中
  if(count === 0) {
    all.checked = false;
    all.indeterminate = false;
  } else if(count === items.length) { // 如果全部都选中
    all.checked = true;
    all.indeterminate = false;
  } else { // 如果选中了部分，全部复选框就展示不确定状态（indeterminate）
    all.checked = false;
    all.indeterminate = true;
  }
}