module.exports = function omit(obj, keys) {
  return Object.entries(obj)
    .filter(([key]) => !keys.includes(key))
    .reduce(
      (result, [key, value]) => Object.assign(result, { [key]: value }),
      {}
    );
};
