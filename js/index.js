// --------------SCROLL BUTTON-------------- //

let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

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
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// --------------MODAL-------------- //

function validateForm() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var mobileNumber = document.getElementById("mobileNumber").value;
  var password = document.getElementById("password").value;

  if (firstName === "" || lastName === "" || email === "" || mobileNumber === "" || password === "") {
    alert("Please fill out all the required fields.");
    document.getElementById("submitBtn").classList.add("btn-danger");
    return false;
  }

  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!password.match(passwordRegex)) {
    alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
    document.getElementById("submitBtn").classList.add("btn-danger");
    return false;
  }

  return true;
}

function resetButtonColor() {
  document.getElementById("submitBtn").classList.remove("btn-danger");
}

function handleSubmit() {
  if (validateForm()) {
    document.getElementById("registrationForm").submit();
  }
}

document.getElementById("submitBtn").addEventListener("click", handleSubmit);

var inputElements = document.querySelectorAll("#registrationForm input");
inputElements.forEach(function (element) {
  element.addEventListener("input", resetButtonColor);
});