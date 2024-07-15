// 返回一个随机十六进制颜色值
export function gc() {
  let s = "0123456789ABCDEF"; // 十六进制
  let c = "#"; // 十六进制
  for (let i = 0; i < 6; i++) {
    // Math.ceil()：向上取整；
    c += s[Math.ceil(Math.random() * 15)]; // 小于或等于 15 的整数
  }
  return c;
}
