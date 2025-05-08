const person = {
  name: "Hasindu",
  age: 23,
};

console.log(person.name);
console.log(person["age"]);

person["name"] = "Hasindu Udara";
person.age = 30;
console.log(person.name);
console.log(person.age);
