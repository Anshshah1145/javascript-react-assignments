import "./style.css";

const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");

const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (event) {

  // Prevent form from refreshing the page
  event.preventDefault();

  // Clear previous messages
  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  passwordError.textContent = "";
  successMessage.textContent = "";

  let isValid = true;

  // Name validation
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Enter a valid email address";
    isValid = false;
  }

  // Phone validation
  const phonePattern = /^[0-9]{10}$/;

  if (phoneInput.value.trim() === "") {
    phoneError.textContent = "Phone number is required";
    isValid = false;
  } else if (!phonePattern.test(phoneInput.value.trim())) {
    phoneError.textContent = "Phone number must contain 10 digits";
    isValid = false;
  }

  // Password validation
  if (passwordInput.value === "") {
    passwordError.textContent = "Password is required";
    isValid = false;
  } else if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    isValid = false;
  }

  // If everything is valid
  if (isValid) {
    successMessage.textContent = "Registration successful!";
    form.reset();
  }
});