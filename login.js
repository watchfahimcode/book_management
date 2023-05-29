// Login form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get form values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Retrieve user data from local storage
    var users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Find matching user
    var matchedUser = users.find(function(user) {
      return user.username === username && user.password === password;
    });

    const jwt = require('jsonwebtoken');

    if (matchedUser) {
      
      // Save user information in JWT
      var token = jwt.sign({ username: matchedUser.username }, "secret_key");
  
      // Store token in local storage
      localStorage.setItem("token", token);
  
      alert("Login successful!");
      // Redirect to book entry page
      window.location.href = "bookEntry.html";
    } else {
      alert("Invalid username or password");
    }
  });
  