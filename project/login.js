


const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');

// Prevent users from logging in if they are not signed up.
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Check if the user is signed up.
   
    if (!localStorage.getItem('email') || localStorage.getItem('email') !== loginForm.querySelector('[name="email"]').value) {
        alert('You must sign up before you can log in.');
        return;
    }
    // Check if the user entered the correct email address and password.
    const email = loginForm.querySelector('[name="email"]').value;
    const password = loginForm.querySelector('[name="password"]').value;

    if (email !== localStorage.getItem('email') || password !== localStorage.getItem('password')) {
        alert('Invalid email address or password.');
        return;
    }

    // Submit the login form.
    loginForm.submit();
});

// When a user clicks the Signup button on the signup form, store their email address and password in local storage.
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signupForm.querySelector('[name="email"]').value;
    const password = signupForm.querySelector('[name="password"]').value;

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // Show the login form and hide the signup form.
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
});


