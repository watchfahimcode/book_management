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

  if (matchedUser) {
    // Store user information in local storage
    localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));

    alert("Login successful!");
    // Redirect to book entry page
    window.location.href = "bookEntry.html";
  } else {
    alert("Invalid username or password");
  }
});
