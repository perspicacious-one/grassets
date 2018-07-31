import moment from "moment";
import { FormatDate } from "./string";
import {
  format,
  parse,
  isWithinRange,
  addDays,
  distanceInWords,
  startOfToday
} from "date-fns";

export function fromNow(val) {
  try {
    let date = moment(val).fromNow();
    return date;
  } catch (e) {
    console.log(e.message);
  }
}

const inFuture = val => {
  if (val > moment().format()) {
    return true;
  }
};

export function FormatDateRegex(val) {
  if (moment(val).isValid()) {
    return FormatDate(val);
  } else {
    return val;
  }
}

export function isWithinDays(val, days = 15) {
  if (!val) {
    return false;
  }
  let futureDate = addDays(startOfToday(), days);
  return isWithinRange(parse(val), startOfToday(), futureDate);
}
export function getWordsTillExpire(val, days = 15) {
  if (!val) {
    return null;
  }
  return distanceInWords(startOfToday(), parse(val));
}
