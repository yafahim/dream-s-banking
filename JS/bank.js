document.getElementById('login-submit').addEventListener('click', function () {

    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    //get useer password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    //if check email and password
    if (userEmail == 'abc@gmail.com' && userPassword == 'secret') {
        window.location.href = 'banking.html'

    }
})