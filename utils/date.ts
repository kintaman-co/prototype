/**
 * Show formatted date
 *
 * @name formatDate
 * @param {number} - unix timestamp
 * @return {string} - formatted date and time
 */
export function formatDate(timestamp: number) {
  const d = minstampToDate(timestamp);
  return `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`;
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
