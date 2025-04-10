// public/js/auth.js

const API_URL = 'http://localhost:5000/api/auth';

async function registerUser(name, email, password) {
  try {
    const res = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    alert(data.message || 'Registered successfully');
  } catch (err) {
    console.error('Registration error:', err);
    alert('Registration failed');
  }
}

async function loginUser(email, password) {
  try {
    const res = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.user.id);
      alert('Login successful');
      window.location.href = 'dashboard.html';
    } else {
      alert(data.message || 'Login failed');
    }
  } catch (err) {
    console.error('Login error:', err);
    alert('Login failed');
  }
}
