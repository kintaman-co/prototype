/**
 * Show formatted date
 *
 * @name formatDate
 * @param {number} - unix timestamp
 * @return {string} - YYYY/MM/DD hh:mm
 */
export function formatDate(timestamp: number) {
  const d = minstampToDate(timestamp);
  return `${d.getFullYear()}/${
    d.getMonth() + 1
  }/${d.getDate()} ${d.getHours()}:${d.getMinutes()}`;
}

/**
 * Date to minutestamp
 */
export function dateToMinstamp(date: Date) {
  return Math.floor(date.getTime() / 60000);
}

/**
 * minstamp to date
 */
export function minstampToDate(minstamp: number) {
  return new Date(minstamp * 60000);
}

/**
 * pad zero to 2 digits
 */
export function padZero(num: number) {
  return `0${num}`.slice(-2);
}

export function formatDuration(duration: number) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${padZero(hours)}:${padZero(minutes)}`;
}
export function sanitizeNaN(num: number) {
  return isNaN(num) ? "" : num.toString();
}
