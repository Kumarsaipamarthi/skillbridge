document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation for empty fields
    if (username === '' || password === '') {
        document.getElementById('error-message').textContent = 'Please fill in both fields.';
        return;
    }

    // Simulate login process (this can be replaced with actual backend logic)
    if (username === 'user' && password === 'password') {
        alert('Login successful!');
        // Redirect or perform other actions
        window.location.href = '/dashboard';  // Example redirect
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password.';
    }
});
