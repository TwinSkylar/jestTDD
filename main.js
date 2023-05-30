export function capitalize(str) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

export function reverse(str) {
  return str.split("").reverse().join("");
}

export class Calculator {
  add(x, y) {
    return x + y;
  }
  sub(x, y) {
    return x - y;
  }
  div(x, y) {
    return x / y;
  }
  mult(x, y) {
    return x * y;
  }
}

function isUpperCase(str) {
  return str === str.toUpperCase();
}

export function caesarCipher(str, rot) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (isUpperCase(str[i])) {
      result += String.fromCharCode(((str.charCodeAt(i) + rot - 65) % 26) + 65);
    } else {
      //else add lowercase letters
      result += String.fromCharCode(((str.charCodeAt(i) + rot - 97) % 26) + 97);
    }
  }
  return result;
}

export function analyzeArray() {
  const result = [];

  result.average = 0;
  result.min = 0;
  result.max = 0;
  return result;
}

