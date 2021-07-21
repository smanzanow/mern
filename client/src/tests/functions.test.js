import { toEUR, timeFormater } from "../functions/formaters";

test("Euro format", () => {
  const input = 1.5;
  const result = toEUR(input);
  expect(result).toMatch("1.50");
  expect(result).toMatch("€");
});

test("time formater", () => {
  const input = 4000;
  const result = timeFormater(input);
  expect(result).toMatch("01:06:40");
});
