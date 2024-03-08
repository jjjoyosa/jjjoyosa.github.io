const { v4: uuidv4 } = require("uuid");
const validator = require("validator");
const fs = require("fs");

export function generateUniqueID(fname, lname) {
  var unique = "";

  var f = fname.charAt(0);
  var l = lname.toLowerCase();

  const alphanumeric = uuidv4().split("-").join("").substring(0, 8);

  var unique = unique.concat(f).concat(l).concat(alphanumeric);

  return unique;
}

export function addAccount(fname, lname, email, age) {
  if (
    fname === undefined &&
    lname === undefined &&
    email === undefined &&
    age === undefined
  ) {
    console.log("Not all fields are present.");
  } else {
    if (fname.length === 0) {
      console.log("Empty first name");
      process.exit(1);
    }
    if (lname.length === 0) {
      console.log("Empty last name");
      process.exit(1);
    }

    if (email.length === 0) {
      console.log("Empty email");
      process.exit(1);
    } else {
      if (validator.isEmail(email) == false) {
        console.log("Incorrect email format");
        process.exit(1);
      }
    }
    if (age.length === 0) {
      console.log("Empty age");
      process.exit(1);
    } else {
      if (age < 18) {
        console.log("Age should be at least 18");
        process.exit(1);
      }
    }

    var uniqueID = generateUniqueID(fname, lname);

    const final =
      fname + ", " + lname + ", " + email + ", " + age + ", " + uniqueID;
  }
}
