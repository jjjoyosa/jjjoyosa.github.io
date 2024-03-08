//import packages
const { v4: uuidv4 } = require("uuid");
const validator = require("validator");
const fs = require("fs");

//function to generate unique id
function generateUniqueID(fname, lname) {
  var unique = "";

  //gets the 1st letter of the first name and turns it into lowercase
  var f = fname.charAt(0).toLowerCase();

  //trasnforms the last name to lowercase
  var l = lname.toLowerCase();

  //generates a unique id that has length of 8
  const alphanumeric = uuidv4().split("-").join("").substring(0, 8);

  var unique = unique.concat(f).concat(l).concat(alphanumeric);

  return unique;
}

function addAccount([fname, lname, email, age]) {
  //checks if the fields are present
  if (
    fname === undefined &&
    lname === undefined &&
    email === undefined &&
    age === undefined
  ) {
    console.log("Not all fields are present.");
  } else {
    //checks if first name is non empty string
    if (fname.length === 0) {
      console.log("Empty first name");
      return 0;
    }
    //checks if last name is non empty string
    if (lname.length === 0) {
      console.log("Empty last name");
      return 0;
    }
    //checks if email is non empty string
    if (email.length === 0) {
      console.log("Empty email");
      return 0;
    } else {
      //checks if email is valid
      if (validator.isEmail(email) == false) {
        console.log("Incorrect email format");
        return 0;
      }
    }
    //checks if age is atleast 18
    if (age < 18) {
      console.log("Age should be at least 18");
      return 0;
    }

    //generate unique id
    var uniqueID = generateUniqueID(fname, lname);

    const final =
      fname + ", " + lname + ", " + email + ", " + age + ", " + uniqueID;

    //append data to users.txt
    fs.appendFile("users.txt", final + "\n", (err) => {
      if (err) {
        //throws the error
        console.error(err);
        return false;
      } else {
        //saves the data into the file
        return true;
      }
    });
  }
}

//exports the functions
module.exports = { generateUniqueID, addAccount };
