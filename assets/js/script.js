// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var passwordChoices = {
  length: 0,
  specialCharacters: "",
  numericCharacters: "",
  lowerCasedCharacters: "",
  upperCasedCharacters: "",

};



// Function to prompt user for password options
function getPasswordOptions() {

    while (!passwordChoices.length) {
      passwordChoices.length = parseInt(prompt("How many characters would you like your password to be? Enter a valid number between 8 and 128."));

      if (isNaN(passwordChoices.length) || passwordChoices.length < 8 || passwordChoices.length > 128) {
        alert("Please enter a valid number between 8 and 128.");
        passwordChoices.length = 0;
      }
    }

    passwordChoices.specialCharacters = confirm("Click OK to include special characters");
    passwordChoices.numericCharacters = confirm("Click OK to include numeric characters");
    passwordChoices.lowerCasedCharacters = confirm("Click OK to include lower-cased characters");
    passwordChoices.upperCasedCharacters = confirm("Click OK to include upper-cased characters");

  }


// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomEl = arr[randomIndex];
  return randomEl;

}


// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  var result = [];
  var randomChar = [];
  var finalChar = [];


  if (passwordChoices.specialCharacters) {
    randomChar += getRandom(specialCharacters);
    finalChar += getRandom(specialCharacters);

  }

  if (passwordChoices.numericCharacters) {
    randomChar += getRandom(numericCharacters);
    finalChar += getRandom(numericCharacters);

  }

  if (passwordChoices.upperCasedCharacters) {
    randomChar += getRandom(upperCasedCharacters);
    finalChar += getRandom(upperCasedCharacters);

  }

  if (passwordChoices.lowerCasedCharacters) {
    randomChar += getRandom(lowerCasedCharacters);
    finalChar += getRandom(lowerCasedCharacters);

  }


  for (var i = 0; i < passwordChoices.length; i++) {
    var randomChar = getRandom(randomChar);
    result.push(randomChar);
  }


  for (var i = 0; i < finalChar.length; i++) {
    result[i] = finalChar[i];
  }

  return result.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);