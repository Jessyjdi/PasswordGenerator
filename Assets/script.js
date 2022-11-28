// Assignment Code
var generateBtn = document.querySelector("#generate");
// password length
var passwordlength;
var userchoice = [];
// Special Characters, Numeric characters, Alphabets- lowercase and uppercase arrays 
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = lowercase.toString().toUpperCase().split(",");
// Write password to the #password input
function writePassword() {
  // receive the right choice from the user then generate the password
  var rightchoice=promptQuestion();
  var passwordText = document.querySelector("#password");
  if(rightchoice){
    var Newpassword = generatePassword(); // all the user combination is stored in the variable "Newpassword"
       passwordText.value = Newpassword;
  }
  else{
        passwordText.value = "";
  }
 }
// Generate the password based on the user choice from the promt.
function generatePassword(){
  var password="";
  var min, max;
for(var i=0; i<passwordlength;i++){
 var randompass = Math.floor(Math.random() * userchoice.length); // the Math function: refernce is from the internet
 password += userchoice[randompass];
}
return password;
}
function promptQuestion(){
  // get the length of the password form the user
  passwordlength=parseInt(prompt("Enter the length of the password (MIN-8 to MAX-128):"));
  if(isNaN(passwordlength)||passwordlength < 8 || passwordlength > 128){
    alert("Please choose password length MIN-8 to MAX-128, Try again! ");
    return false;
  }
  /* get the user choice to include number or lowercase or uppercase or symbols in the password.
  when the user confirm the choice the user choice is concatenated based on the answer
  not using "else if" because as a user input is required to the below questions */
  if (confirm("Do you want to include numbers?"))
  {
    userchoice=userchoice.concat(number);
  }
  if(confirm("Do you want to include lowercases?"))
  {
    userchoice=userchoice.concat(lowercase);
  }
  if(confirm("Do you want to include uppercases?"))
  {
    userchoice=userchoice.concat(uppercase);
  }
  if(confirm("Do you want to include special characters?"))
  {
    userchoice=userchoice.concat(specialCharacters);
  }
  return true; 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


