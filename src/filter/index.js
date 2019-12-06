import Vue from 'vue'
import format from 'date-fns/format'
// 自定义过滤器
Vue.filter('dateFormat', function (value, formatStr = 'YYYY-MM-DD HH:mm:ss') {
  // return moment(value).format(formatStr)
  if (value) {
    return format(value, formatStr)
  }
  return null;
})


// 自定义过滤器
Vue.filter('toPercentage', function (value) {
  if (value == 0) {
    return 0;
  }
  let str = Number(value * 100).toFixed();
  str += "%";
  return str;
})


Vue.filter('fileSizeFormat', function (value) {
  var fileSizeByte = value;
  var fileSizeMsg = ''
  if (fileSizeByte <= 1024) {
    fileSizeMsg = fileSizeByte + 'B'
  } else if (fileSizeByte <= Math.pow(1024, 2)) {
    fileSizeMsg = (fileSizeByte / Math.pow(1024, 1)).toFixed(2) + 'KB'
  } else if (fileSizeByte <= Math.pow(1024, 3)) {
    fileSizeMsg = (fileSizeByte / Math.pow(1024, 2)).toFixed(2) + 'MB'
  } else if (fileSizeByte <= Math.pow(1024, 4)) {
    fileSizeMsg = (fileSizeByte / Math.pow(1024, 3)).toFixed(2) + 'GB'
  }
  return fileSizeMsg;
})
