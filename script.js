$(document).ready(function(){

  function validateField(input, message) {
    let value = input.val().trim();
    let error = input.next(".error");

    if (value === "") {
      input.addClass("error-border").removeClass("success-border");
      error.text(message);
      return false;
    } else {
      input.addClass("success-border").removeClass("error-border");
      error.text("");
      return true;
    }
  }

  $("#name").on("keyup blur", function(){
    validateField($("#name"), "Full Name is required.");
  });

  $("#email").on("keyup blur", function(){
    validateField($("#email"), "Email is required.");
  });

  $("#phone").on("keyup blur", function(){
    validateField($("#phone"), "Phone Number is required.");
  });

  $("#password").on("keyup blur", function(){
    validateField($("#password"), "Password is required.");
  });

  $("#confirmPassword").on("keyup blur", function(){
    let pass = $("#password").val();
    let confirm = $("#confirmPassword").val();
    let error = $("#confirmPassword").next(".error");

    if (confirm === "") {
      $("#confirmPassword").addClass("error-border").removeClass("success-border");
      error.text("Please confirm password.");
    } else if (pass !== confirm) {
      $("#confirmPassword").addClass("error-border").removeClass("success-border");
      error.text("Passwords do not match.");
    } else {
      $("#confirmPassword").addClass("success-border").removeClass("error-border");
      error.text("");
    }
  });

  $("#regForm").submit(function(e){
    e.preventDefault();
    alert("Registration Successful!");
  });

});
