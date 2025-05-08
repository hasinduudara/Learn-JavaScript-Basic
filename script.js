const myAddress = {
  street: "123 Main St",
  city: "Anytown",
  state: "CA",
  zipCode: "12345",
};

for (const key in myAddress) {
  console.log(key + ": " + myAddress[key]);
}
