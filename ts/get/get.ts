export const get = (
  obj: object | null | undefined,
  path: (string | number)[],
  options?: { nullAsString: boolean }
) => {
  const { nullAsString } = options || { nullAsString: false };

  return path.reduce(
    (o: any, key) => (o && o[key] != null ? o[key] : nullAsString ? "" : null),
    obj
  );
};
