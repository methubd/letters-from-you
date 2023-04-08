const btnLogin = data => {
    const userNameField = document.getElementById('input-user-name');
    const passwordField = document.getElementById('input-user-password');
    const userName = userNameField.value;
    const password = passwordField.value;
    userNameField.value = '';
    passwordField.value = '';
}

export {btnLogin}