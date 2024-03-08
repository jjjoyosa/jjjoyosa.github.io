const { v4: uuidv4 } = require("uuid");
const validator = require("validator");
const fs = require("fs");

function generateUniqueID(fname, lname) {
  var unique = "";

  var f = fname.charAt(0).toLowerCase();
  var l = lname.toLowerCase();

  const alphanumeric = uuidv4().split("-").join("").substring(0, 8);

  var unique = unique.concat(f).concat(l).concat(alphanumeric);

  return unique;
}

function addAccount([fname, lname, email, age]) {
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
      return 0;
    }
    if (lname.length === 0) {
      console.log("Empty last name");
      return 0;
    }

    if (email.length === 0) {
      console.log("Empty email");
      return 0;
    } else {
      if (validator.isEmail(email) == false) {
        console.log("Incorrect email format");
        return 0;
      }
    }
    if (age < 18) {
      console.log("Age should be at least 18");
      return 0;
    }

    var uniqueID = generateUniqueID(fname, lname);

    const final =
      fname + ", " + lname + ", " + email + ", " + age + ", " + uniqueID;

    fs.appendFile("users.txt", final + "\n", (err) => {
      if (err) {
        console.error(err);
        return false;
      } else {
        return true;
      }
    });
  }
}
module.exports = { generateUniqueID, addAccount };
