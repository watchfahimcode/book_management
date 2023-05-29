// Registration form submission
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form values
    var fullName = document.getElementById("fullName").value;
    var username = document.getElementById("username").value;
    var userEmail = document.getElementById("userEmail").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
  
    // Validate form fields
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  
    // Create user object
    var user = {
      fullName: fullName,
      username: username,
      userEmail: userEmail,
      password: password
    };
  
    // Save user data to local storage
    var users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  
    alert("Registration successful. Please login to continue.");
    // Redirect to login page
    window.location.href = "login.html";
  });
  