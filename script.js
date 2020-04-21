// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
  
  
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }


// function generatePassword (passwordLength) {
//   var outputPassword = "";
//   var allPossibleChars  = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   for (var i = 0; i < 8; i++) {
//       outputPassword += allPossibleChars.charAt(Math.floor(Math.random() * allPossibleChars.length));
//   }
//   return outputPassword;
// }
// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


function generateRandomPassword (passwordLength) {
  var outputPassword = "";
  var allPossibleChars  = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < passwordLength; i++) {
      outputPassword += allPossibleChars.charAt(Math.floor(Math.random() * allPossibleChars.length));
  }
  return outputPassword;
}