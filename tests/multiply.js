const { multiply } = require("./../calculator");

describe("Multiply", () => {
  test("should multiply two positive integers correctly", () => {
    const result = multiply(3, 2);
    expect(result).toBe(6);
  });

  test("should multiply two floating point numbers correctly", () => {
    const result = multiply(4.5, 2.5);
    expect(result).toBe(11.25);
  });

  test("should throw an error when dividing by 0", () => {
    expect(() => multiply(1.35, 0)).toThrow();
  });

  test("should return the same number if only one argument", () => {
    expect(() => multiply(1.35, 0)).toThrow();
  });
});
