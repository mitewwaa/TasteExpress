// Email form
document.getElementsByClassName("login-form")[0].addEventListener("submit", function(event){
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let isValidEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email) 

    let error = document.querySelector(".login-error");

    // Retrieve users from local storage
    let users = JSON.parse(localStorage.getItem("users"));

    //Check if there are existing users in the local storage
    if(!isValidEmail){
        error.textContent = "Invalid email format!";
    }
    else if (users) {
        // Check if there is a user with the given email and password
        let user = users.find(u => u.email === email && u.password === password);
        if (user) {
            // If the user exists, redirect to the home page
            window.location.href = "home.html";
        } else {
            //Check if the user with that email exists
            let userExists = false;
            for (let i = 0; i < users.length; i++) {
                if (users[i].email === email) {
                    userExists = true;
                    break;
                }
            }
            if (userExists) {
                error.textContent = "Invalid password!";
            } else {
                error.textContent = "No registered user with that email was found!";
            }
        }
    } else {
        error.textContent = "No registered users found!";
    }
});

// Buttons
document.getElementById("register-btn").addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "register.html";
});

document.querySelector(".logo").addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "index.html";
});

document.querySelector(".icon").addEventListener("click", (event) =>{
    event.preventDefault();
    window.location.href = "index.html";
});

document.querySelector(".icon.form").addEventListener("click", (event) =>{
    event.preventDefault();
    window.location.href = "index.html";
});