const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  alert("Button clicked 1");
});

document.getElementById("myInput").addEventListener("keypress", function (e) {
  console.log("Key pressed: " + e.key);
});
