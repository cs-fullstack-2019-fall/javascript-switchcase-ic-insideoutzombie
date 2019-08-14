// Challenge:
// write a class called Person with a first name and last name properties
// prompt the user over and over to select 1) add person 2) print persons
// and 3) Exits program (use switch case. Alert to invalid entry.

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  addPerson() {

  }
  printProp(){
    result (this.firstName + " " + this.lastName);
  }
}

let newerPerson = new Person("John", "Whick");

// let newerPerson = "";

while (newerPerson !== "3") {
  newerPerson = prompt("Enter '1' to add person, '2' to print persons, '3' to quit");
  switch (newerPerson) {
    case "3":
      break;
    case "1":
      prompt("Add new person");
      break;
    case "2":
      alert(newerPerson);
      break;
    // case "Wednesday":
    //   alert("miércoles");
    //   break;
    // case "Thursday":
    //   alert("jueves");
    //   break;
    // case "Friday":
    //   alert("viernes");
    //   break;
    // case "Saturday":
    //   alert("sábado");
    //   break;
    // case "Sunday":
    //   alert("domingo");
    //   break;
    default:
      alert("No Match!");
  }
}
