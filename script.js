
function writePassword() {

  document.getElementById('output').value = generateRandomPassword(document.getElementById('thelength').value);
}

function generateRandomPassword (passwordLength) {
  var outputPassword = "";
  var allPossibleChars  = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < passwordLength; i++) {
      outputPassword += allPossibleChars.charAt(Math.floor(Math.random() * allPossibleChars.length));
  }
  return outputPassword;
}