function exclude(obj, excludeKeys = []) {
  const excludePropertiesSet = new Set(excludeKeys);
  const result = {};
  for (const key in obj) {
    if (!excludePropertiesSet.has(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
export default exclude;
