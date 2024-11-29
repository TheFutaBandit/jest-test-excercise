import { calculator } from "./calculator";

test("addition", () => {
    expect(calculator(33,44,"+")).toBe(77);
})

test("subtraction", () => {
    expect(calculator(33,44,"-")).toBe(-11);
})