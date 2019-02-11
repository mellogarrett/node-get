/**
 * Documentation
 * @param {{}} obj
 * @param {(string | number)[]} path
 */
const get = (obj, path, options) => {
  const { string } = options || { string: false };

  return path.reduce((o, key) => (o && o[key] != null ? o[key] : null), obj);
};

module.exports = get;
