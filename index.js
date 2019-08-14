let fruit_name = prompt("Enter a fruit");

// if (fruit_name === "apple") {
//   alert("red");
// } else if (fruit_name === "grape") {
//   alert("purple");
// } else if (fruit_name === "pear") {
//   alert("green");
// }

switch (fruit_name) {
  case "apple":
    alert("red");
    break;
  case "orange":
    alert("orange");
    break;
  case "grape":
    alert("purple");
    break;
  case "pear":
    alert("green");
    break;
  default:
    alert("Dont know!");
    break;
}
