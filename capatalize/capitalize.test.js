import { capitalize } from "./capitalize";

test('hi', () => {
    expect(
        capitalize("hi")
    ).toBe("Hi");
})