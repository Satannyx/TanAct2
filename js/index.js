// --------------SCROLL BUTTON-------------- //

let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

// Function to handle scrolling and showing/hiding the back-to-top button
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Attach the backToTop function to the click event of the back-to-top button
mybutton.addEventListener("click", backToTop);

// Function to scroll back to the top of the page when the button is clicked
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// --------------MODAL-------------- //

// Function to validate the form on form submission
function validateForm() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var mobileNumber = document.getElementById("mobileNumber").value;
  var password = document.getElementById("password").value;

  // Check if any field is empty
  if (firstName === "" || lastName === "" || email === "" || mobileNumber === "" || password === "") {
    alert("Please fill out all the required fields.");
    return false;
  }

  // Check password requirements using a regular expression
  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!password.match(passwordRegex)) {
    alert("Password must be at least 8 characters long and contain at least one letter (uppercase or lowercase), one number, and one special character.");
    return false;
  }
  
  var confirmPassword = document.getElementById("confirmPassword").value;

  // Check if confirm password matches the original password
  if (password !== confirmPassword) {
    document.getElementById("password").classList.add("is-invalid");
    document.getElementById("confirmPassword").classList.add("is-invalid");
    document.getElementById("passwordMismatchMessage").classList.remove("d-none");
    return false;
  }

  // Check if the email is valid using a regular expression
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailRegex)) {
    alert("Please enter a valid email address.");
    return false;
  }

  return true;
}

// Function to reset the form control borders to their original state
function resetFormControls() {
  var inputElements = document.querySelectorAll("#registrationForm input");
  inputElements.forEach(function (element) {
    element.classList.remove("is-invalid");
  });
}

// Function to handle form submission and trigger validation
function handleSubmit(event) {
  event.preventDefault();
  if (validateForm()) {
    document.getElementById("registrationForm").submit();
  }
}

document.getElementById("registrationForm").addEventListener("submit", handleSubmit);
document.getElementById("submitBtn").addEventListener("click", handleSubmit);


// Reset the form control borders when the input fields change
var inputElements = document.querySelectorAll("#registrationForm input");
inputElements.forEach(function (element) {
  element.addEventListener("input", resetFormControls);
});
