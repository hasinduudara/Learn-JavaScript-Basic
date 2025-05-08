const person = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

const myArray = Object.values(person);

document.getElementById("demo").innerHTML = myArray;
