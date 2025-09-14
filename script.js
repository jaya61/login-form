document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop default form submission

  let username = document.getElementById("name_input").value.trim();
  let password = document.getElementById("password_input").value.trim();
  let checkbox = document.getElementById("checkbox_input").checked;

  // Validation checks
  if (username === "") {
    alert("Please enter your username");
    return;
  }
  
  if(username.length < 3){
    alert("Username must be at least  3 characters long");
    return;
  }

  if (password === "") {
    alert("Please enter your password");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long");
    return;
  }

  if (!checkbox) {
    alert("You must agree to Terms and Privacy Policy");
    return;
  }

  // If everything is valid
  alert("Login successful!");
  // you can also send data to server here
});
