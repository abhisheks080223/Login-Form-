document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.login_box');
    const rememberCheckbox = document.getElementById('remember');
    const forgotPasswordLink = document.getElementById('forgotPassword');
    const registerLink = document.getElementById('registerLink');
    const usernameField = document.getElementById('user');
    const passwordField = document.getElementById('pass');
    const loginButton = document.querySelector('.input-submit'); // Selecting the login button
  
    // Function to clear username and password fields
    function clearFields() {
      usernameField.value = '';
      passwordField.value = '';
    }
  
    // Submit event listener for the login form
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = usernameField.value;
      const password = passwordField.value;
      const rememberMe = rememberCheckbox.checked;
  
      if (username.trim() === '' || password.trim() === '') {
        alert('Please enter both username and password.');
        return;
      }
  
      if (username === 'admin' && password === 'password') {
        alert('Login successful!'); 
        
        window.location.href = 'dashboard.html';
        
        if (rememberMe) {
          localStorage.setItem('rememberedUsername', username);
        } else {
          localStorage.removeItem('rememberedUsername');
        }
        
      } else {
        alert('Incorrect username or password.'); 
      }
      
      clearFields(); // Clear fields after login attempt
    });
  
    // Forgot password link event listener
    forgotPasswordLink.addEventListener('click', function(event) {
      event.preventDefault();
      alert('Redirecting to password reset page...'); 
      window.location.href = 'reset_password.html';
    });
  
    // Register link event listener
    registerLink.addEventListener('click', function(event) {
      event.preventDefault();
      alert('Redirecting to registration page...'); 
      window.location.href = 'register.html';
    });
  
    // Populate username if remembered
    const rememberedUsername = localStorage.getItem('rememberedUsername');
    if (rememberedUsername) {
      usernameField.value = rememberedUsername;
      rememberCheckbox.checked = true;
    }
  
    // Clear fields when login button is clicked
    loginButton.addEventListener('click', function() {
      clearFields();
    });
  });
  