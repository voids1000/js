<script>
  function fun() {
       var password = '';
var pass1="void";
var pass2="teacher";
var pass3="";
password = prompt('Enter the password for the unblocker');
if (password == pass2)
  alert('Not allowed for teachers unless i give you permission-_-');
if (password == pass3)
  alert('dont leave it blank')

if (password == pass1)
  alert('Password Correct! Click OK to enter!');
else {
  location = "https://website.voids1000.repl.co/";

}


function getPassword() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxtzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]";
  var passwordLength = 10;
  password = ''

  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = password
}

	}
</script>
