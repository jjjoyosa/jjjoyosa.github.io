//function to validate password
function validatePassword(pass1, pass2) {
  //checks if the passwords match
  if (pass1 === pass2) {
    //checks if there are at least 8 characters
    if (pass1.length >= 8 && pass2.length >= 8) {
      //checks if there is atleast 1 digit
      let count = 0;
      for (let i = 0; i <= 9; i++) if (pass1.indexOf(i) !== -1) count = 1;
      if (count === 0) return false;

      //checks if there is atleast 1 uppercase
      let ucount = 0;
      let j = 0;
      //iterates through the passsword and checks if there is at least 1 uppercase for each character
      while (j <= pass1.length) {
        var chara = pass1.charAt(j);
        if (chara === chara.toUpperCase() && chara !== chara.toLowerCase())
          ucount++;
        j++;
      }

      //checks if there is atleast 1 lowercase
      let lcount = 0;
      let k = 0;
      //iterates through the passsword and checks if there is at least 1 lowercase for each character
      while (k <= pass1.length) {
        var chara = pass1.charAt(k);
        if (chara !== chara.toUpperCase() && chara === chara.toLowerCase())
          lcount++;
        k++;
      }
      //checks if there is a lowercase or uppercase character present in the password
      if (lcount !== 0 && ucount !== 0) return true;
      else return false;
    } else return false;
  } else return false;
}

//function to reverse password
function reversePassword(password) {
  var newpassword = "";

  //iterates the passsword and reverses it while storing to newpassword
  for (var i = password.length - 1; i >= 0; i--) {
    newpassword += password[i];
  }
  return newpassword;
}

//function to store password
function storePassword(name1, pass1, pass2) {
  var newpassword = "";

  //checks if the passwords are validated
  if (validatePassword(pass1, pass2) == true) {
    newpass = reversePassword(pass1);

    //returns an object with name and newpassword
    const details = {
      name: name1,
      newpassword: newpass,
    };

    return details;
  }
  //returns an object with name and newpassword(password 1)
  else {
    const details = {
      name: name1,
      newpassword: pass1,
    };

    return details;
  }
}
//run the program
console.log(storePassword("John", "Pass1234", "Pass1234")); // returns {name: "John", newpassword:"4321ssaP"}
console.log(storePassword("John", "Pass123", "Pass12345")); // returns {name: "John", newpassword:"Pass123"}
