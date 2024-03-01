function validatePassword(pass1, pass2) {
  //checks if the passwords match
  if (pass1 === pass2) {
    //checks if characters are atleast 8
    if (pass1.length >= 8 && pass2.length >= 8) {
      //checks if there is atleast 1 digit
      let count = 0;
      for (let i = 0; i <= 9; i++) if (pass1.indexOf(i) !== -1) count = 1;
      if (count === 0) return false;

      //checks if there is atleast 1 uppercase
      let ucount = 0;
      let j = 0;
      while (j <= pass1.length) {
        var chara = pass1.charAt(j);

        if (chara === chara.toUpperCase() && chara !== chara.toLowerCase())
          ucount++;
        j++;
      }

      //checks if there is atleast 1 lowercase
      let lcount = 0;
      let k = 0;
      while (k <= pass1.length) {
        var chara = pass1.charAt(k);

        if (chara !== chara.toUpperCase() && chara === chara.toLowerCase())
          lcount++;
        k++;
      }
      if (lcount !== 0 && ucount !== 0) return true;
      else return false;
    } else return false;
  } else return false;
}

function reversePassword(password) {
  var newpassword = "";

  for (var i = password.length - 1; i >= 0; i--) {
    newpassword += password[i];
  }
  return newpassword;
}

function storePassword(name1, pass1, pass2) {
  var newpassword = "";

  if (validatePassword(pass1, pass2) == true) {
    newpass = reversePassword(pass1);

    const details = {
      name: name1,
      newpassword: newpass,
    };

    return details;
  } else {
    const details = {
      name: name1,
      newpassword: pass1,
    };

    return details;
  }
}

console.log(storePassword("John", "Pass1234", "Pass1234")); // returns {name: "John", newpassword:"4321ssaP"}
console.log(storePassword("John", "Pass123", "Pass12345")); // returns {name: "John", newpassword:"Pass123"}
