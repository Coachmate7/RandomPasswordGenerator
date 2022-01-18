// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  
  passwordText.value = password;
 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  //created variables for each password characters
  var pass = "";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var symbols = "!@#$%^&*()"
  var numeric = "1234567890";
  //indicates if the password length has met the conditions
  var conditions = false;
  //length of password set by the user
  var passwordLength;

  do{
    //pasword length prompt for users desired length
    passwordLength = prompt("How long would you like your password to be? Must be between 8 and 128 characters.");
    //user decides how many number of characters desiganted for the password
    if(parseInt(passwordLength)!=NaN && passwordLength >= 8 && passwordLength <= 128) {
    passwordLength = parseInt(passwordLength);
    //if conditions are met the user will not be prompted again to choose how many characters
    conditions = true; 
  }
  }while(!conditions);

    //ask the user desired variables for password
    var lowerCaseChars = confirm("Would you like Lower case characters in your password?");
    var upperCaseChars = confirm("Would you like Upper case characters in your password?");
    var symbolChars = confirm("Would you like special characters in your password?");
    var numericChars = confirm("Would you like numbers in your password?")

    var i;
    var sectionlength;

if(!upperCaseChars && !lowerCaseChars && !symbolChars && !numericChars){
  alert("Cannot generate password. you will need atleast one option selected.");
}
}