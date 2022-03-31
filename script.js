// Assignment Code
var generateBtn = document.querySelector("#generate");
var charTypesCount = 4;
var lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz'.split("");
var uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
var numericCharacters = '1234567890'.split("");
var specialCharacters = ' !\”#$%&\’()*+,-./:;<=>?@[\\]^_`{|}~'.split("");

function generatePassword() {

  //Set password length
  var charCount = parseInt(prompt("Choose a password length between 8 and 128 characters:", 8));
  while(charCount < 8 || charCount > 128 || charCount == undefined || Number.isNaN(charCount)) {
    charCount = parseInt(prompt("Input a valid password lenght between 8 and 128:", 8));
  }

  //Verify character types
  var charTypeSelected = false;
  var promptCount = 0;
  while (!charTypeSelected) {

    if (promptCount > 0){
      alert("Please select at least one character type to include in the password.");
    }
    
    var includeLowercase = confirm("Should the password include Lowercase characters? ");
    var includeUppercase = confirm("Should the password include Uppercase characters? ");
    var includeNumeric = confirm("Should the password include Numeric characters? ");
    var includeSpecial = confirm("Should the password include Special characters? ");

    promptCount++;

    if(includeLowercase || includeUppercase || includeNumeric || includeSpecial){
      charTypeSelected = true;
    } 
  }

  //Generate password string
  var password = [];
  while(password.length != charCount) {
    var charsToAdd = [];
    if (password.length < charCount) {
      if (includeLowercase) {
        charsToAdd.push(lowercaseCharacters[Math.floor(Math.random() * lowercaseCharacters.length)]);
      } 
      if (includeUppercase) {
        charsToAdd.push(uppercaseCharacters[Math.floor(Math.random() * uppercaseCharacters.length)]);
      }
      if (includeNumeric) {
        charsToAdd.push(numericCharacters[Math.floor(Math.random() * numericCharacters.length)]);
      }
      if (includeSpecial) {
        charsToAdd.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
      }
      password = password.concat(charsToAdd);
    }
    if (password.length > charCount) {
      password.pop();
    }
  }

  //Shuffle password string
  password = password.sort(function(a, b){return 0.5 - Math.random()});

  return password.join("");

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
