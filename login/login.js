// Sample login credentials for demonstration
const SAMPLE_CREDENTIALS = {
    email: 'demo@example.com',
    password: 'password123'
};

// Get form and elements
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const messageDiv = document.getElementById('message');

// Form submission handler
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    handleLogin();
});

function handleLogin() {
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    
    // Validation
    if (!email || !password) {
        showMessage('Please fill in all fields', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showMessage('Please enter a valid email address', 'error');
        return;
    }
    
    // Check credentials (sample only - in production, use actual authentication)
    if (email === SAMPLE_CREDENTIALS.email && password === SAMPLE_CREDENTIALS.password) {
        showMessage('Login successful! Redirecting...', 'success');
        
        // Store login info in localStorage
        localStorage.setItem('userEmail', email);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('loginTime', new Date().toISOString());
        
        // Simulate redirect after 1.5 seconds
        setTimeout(() => {
            // In a real app, redirect to dashboard or home page
            alert('Welcome! In a real application, you would be redirected to the dashboard.');
            resetForm();
        }, 1500);
    } else {
        showMessage('Invalid email or password. Try: demo@example.com / password123', 'error');
        passwordInput.value = '';
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showMessage(text, type) {
    messageDiv.textContent = text;
    messageDiv.className = `message ${type}`;
    messageDiv.style.display = 'block';
    
    // Auto-hide success messages after 3 seconds
    if (type === 'success') {
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 3000);
    }
}

function resetForm() {
    loginForm.reset();
    messageDiv.style.display = 'none';
} login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;   
    