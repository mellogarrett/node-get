/**
 * Documentation
 * @param {{}} obj
 * @param {string[]} path
 * @param {{string: boolean}} options "string" determines the return value
 */
const get = (obj, path, options) => {
  const { string } = options || { string: false };

  return path.reduce(
    (o, key) => (o && o[key] != null ? o[key] : string ? "" : null),
    obj
  );
};

module.exports = get;
