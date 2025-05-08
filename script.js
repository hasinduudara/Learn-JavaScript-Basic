// Function එකකට number එකක් pass කරලා, එය even ද odd ද කියලා return කරන්න.
// Eg: checkEvenOdd(7) ➜ "Odd"

let checkEvenOdd = (num) => {
  if (num % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

console.log(checkEvenOdd(4));
