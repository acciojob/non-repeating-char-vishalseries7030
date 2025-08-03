function firstNonRepeatedChar(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  return null;
}

const input = prompt("Enter a string");
const result = firstNonRepeatedChar(input);
alert(result === null ? "null" : result);
