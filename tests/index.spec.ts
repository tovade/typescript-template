import calculate from "../src/index";

test("should increment number by 1", () => {
  expect(calculate(1)).toBe(2);
});
