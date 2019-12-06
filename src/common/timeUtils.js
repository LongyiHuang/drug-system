import {format, subDays} from 'date-fns'

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR


export const getSubDate = (amount) => {
  return format(subDays(new Date(), amount), 'YYYY-MM-DD');
}

export const dateTimeFormat = (timestamp, formatStr = 'YYYY-MM-DD HH:mm:ss') => {
  if (timestamp) {
    if (typeof timestamp === 'string') {
      timestamp = parseInt(timestamp);
    }
    return format(timestamp, formatStr)
  }
  return null
};

export const formatNearTime = (timestamp, format) => {
  if (!timestamp) {
    return "";
  }
  // 获取当前时间戳
  const currentTimestamp = new Date().getTime();
  // 时间戳相减
  const diffTimestamp = currentTimestamp - timestamp;
  // 格式化
  if (diffTimestamp <= MINUTE) {
    return '刚刚'
  } else if (diffTimestamp > MINUTE && diffTimestamp <= HOUR) {
    var minutes = parseInt(diffTimestamp / MINUTE)
    return minutes + '分钟前'
  } else if (diffTimestamp > HOUR && diffTimestamp <= DAY) {
    var hours = parseInt(diffTimestamp / HOUR)
    return hours + '小时前'
  } else if (diffTimestamp > DAY && diffTimestamp <= (DAY * 3)) {
    var days = parseInt(diffTimestamp / DAY)
    return days + '天前'
  } else {
    return dateTimeFormat(timestamp, format)
  }
}

export const residueTimes = (timeOut) => {
  // 获取当前时间戳
  const currentTimestamp = new Date().getTime();
  if (timeOut > 0) {
    let diff = timeOut - currentTimestamp;
    if (diff <= 0) {
      return '已过期'
    }
    let days, hours, minutes;
    days = parseInt(diff / DAY);
    if (days > 0) {
      diff -= days * DAY;
      days = days + '天';
    } else {
      days = '';
    }
    hours = parseInt(diff / HOUR);
    if (hours > 0) {
      diff -= hours * HOUR;
      hours = hours + '小时';
    } else {
      hours = '';
    }
    minutes = parseInt(diff / MINUTE);
    if (minutes > 0) {
      minutes = minutes + '分';
    } else {
      minutes = '';
    }
    return days + hours + minutes ? days + hours + minutes : '即将过期';
  }
  return '已过期';
}

export const dateTime2Timestamp = (dateTime) => {
  return Date.parse(dateTime);
}



export default { dateTimeFormat };
