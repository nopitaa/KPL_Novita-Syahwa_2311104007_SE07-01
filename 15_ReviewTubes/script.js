    function switchTab(tab) {
    const loginForm = document.getElementById('login');
    const registerForm = document.getElementById('register');
    const tabButtons = document.querySelectorAll('.tablink');

    loginForm.classList.remove('active-form');
    registerForm.classList.remove('active-form');
    tabButtons.forEach(btn => btn.classList.remove('active'));

    if (tab === 'login') {
        loginForm.classList.add('active-form');
        tabButtons[0].classList.add('active');
    } else {
        registerForm.classList.add('active-form');
        tabButtons[1].classList.add('active');
    }
    }
