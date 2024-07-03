// index.js
const loginForm = document.getElementById('login-form');
const users = require('./users.js');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    if (user.role === 'teacher') {
      window.location.href = 'teacher.html';
    } else if (user.role === 'student') {
      window.location.href = 'student.html';
    }
  } else {
    alert('Invalid username or password');
  }
  // index.js
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
const users = require('./users.js');

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = registerForm.username.value;
  const password = registerForm.password.value;
  const role = registerForm.role.value;
  users.addUser(username, password, role);
  alert(`Account created successfully!`);
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;
  const user = users.getUsers().find(u => u.username === username && u.password === password);
  if (user) {
    if (user.role === 'teacher') {
      window.location.href = 'teacher.html';
    } else if (user.role === 'tudent') {
      window.location.href = 'tudent.html';
    }
  } else {
    alert('Invalid username or password');
  }
  // index.js
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
const users = require('./users.js');

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = registerForm.username.value;
  const password = registerForm.password.value;
  const role = registerForm.role.value;
  console.log(`Registering user: ${username} with password: ${password} and role: ${role}`);
  users.addUser(username, password, role);
  alert(`Account created successfully!`);
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;
  console.log(`Logging in user: ${username} with password: ${password}`);
  const user = users.getUsers().find(u => u.username === username && u.password === password);
  if (user) {
    console.log(`User found: ${user.username} with role: ${user.role}`);
    if (user.role === 'teacher') {
      window.location.href = 'teacher.html';
    } else if (user.role === 'tudent') {
      window.location.href = 'tudent.html';
    }
  } else {
    console.log('Invalid username or password');
    alert('Invalid username or password');
  }
});
});

});
