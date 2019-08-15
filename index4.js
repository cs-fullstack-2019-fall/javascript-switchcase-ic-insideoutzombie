class Person {
  constructor(fname, lname) {
    this.fname_prop = fname;
    this.lname_prop = lname;
  }
}

let menu_choice;
let persons = [];

// Add a person instance
function addPerson() {
  let fname = prompt("Enter First Name:");
  let lname = prompt("Enter Last Name:");
  let newPerson = new Person(fname,lname);
  persons.push(newPerson);
  console.log(persons);
  console.log(persons.length);
}

// List persons in list
function listPersons() {
    for (index in persons) {
      // console.log(persons[index]);
      console.log(persons[index].fname_prop + " " +
                  persons[index].lname_prop);
    }
}

while(menu_choice !== "3") {
  menu_choice = prompt(
      "Enter an option below:\n" +
      "1. Add Person\n" +
      "2. Print Person\n" +
      "3. Quit Program" +
      "Pick an option from menu:");
  switch (menu_choice) {
    case "3":
      console.log("Goodbye!");
      break;
    case "1":
      addPerson();
      break;
    case "2":
      listPersons();
      break;
  }
}
