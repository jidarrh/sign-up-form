function validation() {
const firstName = document.getElementById('fname').value;
const lastName = document.getElementById('lname').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const errorElement = document.getElementById('error')


errorElement.style.padding = "0.5rem";

if (firstName === '') {
    text = "First Name cannot be empty";
    errorElement.innerHTML = text;
    return false;
 }

if (lastName === '') {
    text = "Last Name cannot be empty";
    errorElement.innerHTML = text;
    return false;
 }

if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Looks like this is not an email";
    errorElement.innerHTML = text;
    return false;
 }

 if (password === '' || password.length < 6) {
    text = "Password must be longer than 6 characters";
    errorElement.innerHTML = text;
    return false;
 }

 alert("Submitted Successfuly!")
return true;
}

