document.addEventListener('DOMContentLoaded', () => {
  // Common elements
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const errorAlert = document.getElementById('error-alert');

  // Handle Login
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const btn = loginForm.querySelector('button');
      
      try {
        btn.textContent = 'Authenticating...';
        btn.disabled = true;
        
        const res = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
        
        const data = await res.json();
        
        if (!res.ok) throw new Error(data.error || 'Login failed');
        
        // Save token
        localStorage.setItem('token', data.token);
        
        // Redirect
        window.location.href = '/dashboard.html';
        
      } catch (err) {
        if (errorAlert) {
          errorAlert.textContent = err.message;
          errorAlert.style.display = 'block';
        }
      } finally {
        btn.textContent = 'Authenticate & Enter';
        btn.disabled = false;
      }
    });
  }

  // Handle Signup
  if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const btn = signupForm.querySelector('button');
      
      try {
        btn.textContent = 'Initializing...';
        btn.disabled = true;
        
        const res = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, email, password })
        });
        
        const data = await res.json();
        
        if (!res.ok) throw new Error(data.error || 'Registration failed');
        
        // If successful, redirect to login
        alert('Account created successfully! Please log in.');
        window.location.href = '/login.html';
        
      } catch (err) {
        if (errorAlert) {
          errorAlert.textContent = err.message;
          errorAlert.style.display = 'block';
        }
      } finally {
        btn.textContent = 'Initialize Account';
        btn.disabled = false;
      }
    });
  }
});
