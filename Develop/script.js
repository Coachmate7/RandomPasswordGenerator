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

    //loop counter
    var i;


    //prompt telling user must use atleast one of the variables
    if(!upperCaseChars && !lowerCaseChars && !symbolChars && !numericChars){
      alert("Cannot generate password. you will need atleast one option selected.");
    }

    //generate password after atleast one variable has been chosen
    else{

      //loop will generate the length of password via the deired length entered by the user
      for(i = 0; i < passwordLength;){
        //if lower case variable is chosen lower case characters will be included in the password 
        if(lowerCase){
          pass = pass.concat(lowerCase.charAt(Math.floor(Math.floor() * lowerCase.length)).toString());
          i++;
        }
        //if upper case variable is chosen upper case characters will be included in the password 
        if(upperCase && i < passwordLength){
          pass = pass.concat(upperCase.charAt(Math.floor(Math.floor() * upperCase.length)).toString());
          i++;
        }     
        //if symbol variable is chosen symbol characters will be included in the password 
        if(symbols && i < passwordLength){
          pass = pass.concat(symbols.charAt(Math.floor(Math.floor() * symbols.length)).toString());
          i++;
        }
        //if numeric variable is chosen numeric characters will be included in the password 
        if(numeric && i < passwordLength){
          pass = pass.concat(numeric.charAt(Math.floor(Math.floor() * numeric.length)).toString());
          i++;
      }
    }
  }
  //returns the generated password to the console
  return pass;
}