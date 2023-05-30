// Check if the user is logged in
function isLoggedIn() {
    return !!localStorage.getItem("loggedInUser");
  }
  
  // Redirect to the login page if the user is not logged in
  function redirectToLogin() {
    if (!isLoggedIn()) {
      window.location.href = "login.html";
    }
  }
  