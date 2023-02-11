export const convertMsToDate = (ms) => {
    return (new Date(ms)).toDateString();
}

export function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getDate() + "/" + (date.getMonth()+1)  + "/" + date.getFullYear() + "  " + strTime;
}

export function arrayToDate(arrayDate) {
  const [year, month, day, hour, minute] = arrayDate
  const convertedDate = new Date(year, month-1, day, hour, minute);
  return convertedDate;
}

export const getDateDiff = (date1, date2) => {
  console.log({date1, date2})
  const diff = date2 - date1
  return diff;
} 

export function timestampToDatetimeInputString(date) {
    date = new Date(date.getTime() - new Date().getTimezoneOffset() * 60 * 1000)
    var isoString = date.toISOString()
    return isoString.substring(0, (isoString.indexOf("T")|0) + 6|0);
  }
  
export function _getTimeZoneOffsetInMs() {
    return new Date().getTimezoneOffset() * -60 * 1000;
  }