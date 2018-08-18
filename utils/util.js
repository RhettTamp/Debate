const wxParse = require('/wxParse/wxParse.js').wxParse; // 解决HTML及markdown解析
const formatTime = (date, fmt) => { // 时间格式化
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (var k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}

function matchTimeRun() {
  let number = 1;
 
  let time = setInterval(() => {
   this.setData({
      number
    })
    number++
  }, 1000)
}




module.exports = {
  wxParse,
  formatTime,
  
}
