import {
  format,
  parse,
  isWithinRange,
  addDays,
  distanceInWords,
  startOfToday,
} from 'date-fns';

export function isWithinDays(val, days = 15) {
  if (!val) {
    return false;
  }
  const futureDate = addDays(startOfToday(), days);
  return isWithinRange(parse(val), startOfToday(), futureDate);
}
export function getWordsTillExpire(val, days = 15) {
  if (!val) {
    return null;
  }
  return distanceInWords(startOfToday(), parse(val));
}
