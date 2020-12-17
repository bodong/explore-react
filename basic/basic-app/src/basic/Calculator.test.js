import { multiply, add, even } from "./Calculator";

test("Multiply test", () => {
  expect(multiply(3, 2)).toBe(6);
});

test("Addition test", () => {
  expect(add(3, 3)).toBe(6);
});

test("Even number test", () => {
  expect(even(3)).toBe(false);
  expect(even(2)).toBe(true);
  expect(even(0)).toBe(false);
  expect(even(-1)).toBe(false);
});
