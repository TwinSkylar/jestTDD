import { capitalize,reverse,Calculator,caesarCipher,analyzeArray } from "./main";
import {describe, expect, test} from '@jest/globals';


test("Capitalize", () => {
  expect(capitalize("word")).toBe('Word');
});

test("Reverse", () => {
  expect(reverse("apple")).toBe('elppa');
});

describe("Calculator", () => {
  const calculator = new Calculator();

  test("defines add()", () => {expect(calculator.add(2,2)).toBe(4);});
  test("defines subtract()", () => {expect(calculator.sub(4,3)).toBe(1);});
  test("defines divide()", () => {expect(calculator.div(20,5)).toBe(4);});
  test("defines multiply()", () => {expect(calculator.mult(4,3)).toBe(12);});
});

test("Ceaser Cipher", () => {
  expect(caesarCipher("apple",2)).toBe('crrng');
  expect(caesarCipher("zebra",2)).toBe('bgdtc');
  expect(caesarCipher("Apple",2)).toBe('Crrng');  
});

test('test an array for certain properties', () => {
  expect(analyzeArray()).toHaveProperty('min');
  expect(analyzeArray()).toHaveProperty('max');
  expect(analyzeArray()).toHaveProperty('length');
  expect(analyzeArray()).toHaveProperty('average');

});
