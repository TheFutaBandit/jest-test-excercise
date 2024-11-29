import { cipher } from "./ceaserCipher";

test("non char case", () => {
    expect(cipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})

test("text preservation", () => {
    expect(cipher('HeLLo', 3)).toBe('KhOOr')
})