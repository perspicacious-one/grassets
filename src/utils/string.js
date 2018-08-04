import { isDate } from 'moment';

// Generic string operations
export const IsDate = (val) => {
  const regDate = new RegExp(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d))/);
  return val.test(regDate);
};
export const IsNumber = (val) => {
  if (isDate(val)) { return false; }
  if (isNaN(val)) { return false; }
  if (parseInt(val) === NaN) { return false; }
  return true;
};
export const IsUrl = (val) => {
  const regUrl = new RegExp(/^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/);
  return regUrl.test(val);
};

export const FormatCamel = val => val.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

export const FormatDate = (val) => {
  if (!val || val === ' ') { return '2010-02-01'; }
  const regDate = new RegExp(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d))/);
  const result = val.match(regDate);
  return result[0];
};

// Project specific operations
export const GetDisplayName = (val) => {
  const keys = Object.keys(val);
  switch (true) {
    case (keys.includes('firstName')):
      return (`${val.firstName} ${val.lastName}`);
    case (keys.includes('model')):
      return (`${val.maker} ${val.model}`);
    default:
      return (val.name);
  }
};
