//Registration form
document.getElementsByClassName("register-form")[0].addEventListener("submit", function(event){
    event.preventDefault();

    let email = document.getElementById("email").value;
    let full_name = document.getElementById("full-name").value;
    let password = document.getElementById("password").value;
    let repeat_password = document.getElementById("repeat-passwоrd").value;

    let isValidEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email) 

    // password: малка, голя буква, символ и поне 8 символа дължина. 
    // При неспазване на някое правило да се визуализира грешка "Invalid password format"
    let isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/.test(password);

    let error = document.querySelector(".register-error");

    if (!isValidEmail) {
        error.textContent = "Invalid email format!";
        return;
    } else if (!isPasswordValid) {
        error.textContent = "Invalid password format!";
        return;
    } else if (password !== repeat_password) {
        error.textContent = "Passwords do not match!";
        return;
    }

    // Check if there is already a registered user with the same email
    let existingUsers = JSON.parse(localStorage.getItem("users"));
    if (existingUsers) {
        for (let i = 0; i < existingUsers.length; i++) {
            if (existingUsers[i].email === email) {
                error.textContent = "Email already registered!";
                return;
            }
        }
    }

    // Save user details to local storage
    let userDetails = {
        email: email,
        password: password,
        full_name: full_name
    };

    if (existingUsers) {
        existingUsers.push(userDetails);
        localStorage.setItem("users", JSON.stringify(existingUsers));
    } else {
        localStorage.setItem("users", JSON.stringify([userDetails]));
    }

    alert('Registration successful! Now you can log-in!');
    window.location.href = "login.html";
});

// Buttons
document.querySelector(".logo").addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "index.html";
});

document.querySelector(".icon").addEventListener("click", (event) =>{
    event.preventDefault();
    window.location.href = "login.html";
});

document.querySelector(".icon.form").addEventListener("click", (event) =>{
    event.preventDefault();
    window.location.href = "login.html";
});