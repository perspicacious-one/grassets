import DataMap from '../components/common/Mapping';

// Apollo graphql data operations

function hasId(val) {
  if (typeof val === 'object') {
    const keys = Object.keys(val);
    return keys.includes('id');
  }
  return false;
}
export function getFirstObjectWithId(data, depth = 4) {
  if (!data) {
    return null;
  }
  if (depth < 1) {
    return data;
  }
  const entries = Object.values(data);
  if (hasId(entries)) {
    return entries;
  }
  if (Array.isArray(entries)) {
    const first = entries[0];
    if (typeof first === 'object' && hasId(first)) {
      return entries;
    }
  } else {
    getFirstObjectWithId(entries, depth - 1);
  }
}

// Project specific operations
export const GetDisplayName = (val) => {
  let keys = Object.keys(val);
  if (keys === '0') {
    keys = Object.keys(val[0]);
  }
  switch (true) {
    case keys.includes('firstName'):
      return `${val.firstName} ${val.lastName}`;
    case keys.includes('model'):
      return `${val.maker} ${val.model}`;
    default:
      return val.name;
  }
};

export function normalizeResult(data) {
  if (!data) {
    return null;
  }
  if (Array.isArray(data)) {
    return Object.values(data)[0];
  }
}
