// ### Problem 1:
// Put the start of your program in a main function.
// Ask the user to enter a number from 1 through 4.
// Print the corresponding Month that matches each number. (Hint: 1 is January).

// let month_number = prompt("Enter month number (1 - 4)");
//
// switch (month_number) {
//   case "1":
//     alert("Jan");
//     break;
//   case "2":
//     alert("Feb");
//     break;
//   case "3":
//     alert("Mar");
//     break;
//   case "4":
//     alert("Apr");
//     break;
//   default:
//     alert("No Match!");
// }

// ### Problem 2:
// Put the start of your program in a main function.
// Ask the user to enter a day of the week.
// Print the corresponding Spanish word.
// If they do not input a day of the week say "That is not a day of the week in English."

// - lunes. Monday.
// - martes. Tuesday.
// - miércoles. Wednesday.
// - jueves. Thursday.
// - viernes. Friday.
// - sábado. Saturday.
// - domingo. Sunday.

let daySpan = prompt("Enter the day to see");

switch (daySpan) {
  case "Monday":
    alert("lunes");
    break;
  case "Tuesday":
    alert("jueves");
    break;
  case "Wednesday":
    alert("miércoles");
    break;
  case "Thursday":
    alert("jueves");
    break;
  case "Friday":
    alert("viernes");
    break;
  case "Saturday":
    alert("sábado");
    break;
  case "Sunday":
    alert("domingo");
    break;
  default:
    alert("No Match!");
}

// ### Problem 3:
// Put the start of your program in a main function.
// Ask the user what size shirt they want to order (you decide the shirt sizes).
// Once they select the size of shirt add their selection to an array.
let userSize = prompt("Enter your shirt size");

switch (userSize) {
  case "small":
    console.log("order small shirt");
    break;
  case "medium":
    console.log("order medium shirt");
    break;
  case "large":
    console.log("order large shirt");
    break;
  case "x-large":
    console.log("order x-large shirt");
    break;
  default:
    console.log("we dont have that size");
}
