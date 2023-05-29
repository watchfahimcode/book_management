document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
  
      // Retrieve user data array from local storage
      var storedUsers = localStorage.getItem('users');
      if (storedUsers) {
        var users = JSON.parse(storedUsers);
  
        // Find the user with the matching username
        var user = users.find(function(user) {
          return user.username === username;
        });
  
        // Check if user exists and password is correct
        if (user && user.password === password) {
          // Create JWT token
          createJWTToken(user.username)
            .then(function(token) {
              // Save token to local storage
              localStorage.setItem('token', token);
  
              // Show success message
              var successMessage = document.getElementById('successMessage');
              successMessage.innerText = 'Login successful! Redirecting...';
  
              // Redirect to a protected page (e.g., index.html) after a short delay
              setTimeout(function() {
                window.location.href = 'pet rescuer.html';
              }, 2000); // 2000 milliseconds = 2 seconds
            })
            .catch(function(error) {
              console.log(error);
              alert('Error creating JWT token');
            });
        } else {
          alert('Invalid username or password');
        }
      } else {
        alert('User does not exist');
      }
    });
  });
  
  function createJWTToken(username) {
    return new Promise(function(resolve, reject) {
      // Retrieve the current token value from localStorage
      var currentToken = localStorage.getItem('currentToken');
      var token = currentToken ? parseInt(currentToken) + 1 : 1;
  
      // Update the current token value in localStorage
      localStorage.setItem('currentToken', token);
  
      if (token) {
        resolve(token);
      } else {
        reject('Error generating JWT token');
      }
    });
  }