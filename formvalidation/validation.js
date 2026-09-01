
const form = document.querySelector(".border");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.querySelector("#user_name").value.trim();
    const password = document.querySelector("#password").value;
    const cpassword = document.querySelector("#cpassword").value;

    // Username validation
    if (username === "") {
        alert("Please Enter your Username.");
        return;
    }

    if (username.length < 3) {
        alert("Username must be at least 3 characters.");
        return;
    }

    // Password validation
    if (password === "") {
        alert("Please Enter your password.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    // Confirm password validation
    if (cpassword === "") {
        alert("Please Confirm your password.");
        return;
    }

    if (password !== cpassword) {
        alert("Password and confirm password do not match.");
        return;
    }

    // If everything is valid
    alert("Form Submitted Successfully!");

    form.submit();
});
