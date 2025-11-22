$(document).ready(function () {

  $("#regForm").submit(function (e) {
    e.preventDefault();

    let isValid = true;

    // Clear all error messages
    $("small.error").text("");

    // --- STUDENT NUMBER ---
    let studentNum = $("#studentNum").val().trim();
    let studentPattern = /^24-\d{5}$/;

    if (!studentPattern.test(studentNum)) {
      showError("#studentNum", "Student number must be like 24-12344");
      isValid = false;
    }

    // --- COURSE ---
    if ($("#course").val().trim() === "") {
      showError("#course", "Course is required");
      isValid = false;
    }

    // --- YEAR LEVEL ---
    if ($("#year").val() === "") {
      showError("#year", "Please select a year level");
      isValid = false;
    }

    // --- SECTION ---
    if ($("#section").val() === "") {
      showError("#section", "Please select a section");
      isValid = false;
    }

    // --- DATE OF BIRTH ---
    let dob = $("#dob").val();
    let today = new Date();

    if (dob === "") {
      showError("#dob", "Date of birth is required");
      isValid = false;
    } else if (new Date(dob) > today) {
      showError("#dob", "Birthday cannot be in the future");
      isValid = false;
    }

    // --- GENDER ---
    if ($("#gender").val() === "") {
      showError("#gender", "Please select a gender");
      isValid = false;
    }

    // --- FULL NAME ---
    if ($("#name").val().trim() === "") {
      showError("#name", "Full name is required");
      isValid = false;
    }

    // --- EMAIL ---
    let email = $("#email").val().trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      showError("#email", "Enter a valid email");
      isValid = false;
    }

    // --- CONTACT NUMBER ---
    let phone = $("#phone").val().trim();
    let phonePattern = /^09\d{9}$/;

    if (!phonePattern.test(phone)) {
      showError("#phone", "Contact number must be 11 digits and start with 09");
      isValid = false;
    }

    // --- PASSWORD ---
    let password = $("#password").val().trim();

    if (password.length < 6) {
      showError("#password", "Password must be at least 6 characters");
      isValid = false;
    }

    // --- CONFIRM PASSWORD ---
    let confirmPassword = $("#confirmPassword").val().trim();

    if (confirmPassword !== password) {
      showError("#confirmPassword", "Passwords do not match");
      isValid = false;
    }

    // If all is valid
    if (isValid) {
      alert("Registration Successful!");
      $("#regForm")[0].reset();
    }
  });

  // FUNCTION TO DISPLAY ERROR
  function showError(input, message) {
    $(input).next("small.error").text(message);
  }

});
