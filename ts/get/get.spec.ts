import { get } from "./get";

describe("get", () => {
  it("should return a nested property when given an object and a path in the form of a string array", () => {
    const obj = { a: { b: { c: "hi" } } };
    expect(get(obj, ["a", "b", "c"])).toBe("hi");
  });

  it("should convert null values to an empty string when specifying to do so in the options parameter", () => {
    const obj = { a: { b: { c: null } } };
    expect(get(obj, ["a", "b", "c"], { nullAsString: true })).toBe("");
  });

  it("should always return null if you try to access a nested path that doesn't exist", () => {
    const obj = { x: { y: { x: "" } } };
    expect(get(obj, ["a", "b", "c"])).toBe(null);
  });

  it("should return null if the first argument is null or undefined", () => {
    const obj = undefined;
    expect(get(obj, ["x"])).toBe(null);
  });
});
