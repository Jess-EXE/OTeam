var loginSection = document.getElementById("login-section");
var profileSection = document.getElementById("profile-section");
var logOutButton = document.getElementById("log-out-button")
var navItems = document.getElementById("nav-list-item");

function LogOut() {
    profileSection.classList.add("hidden");
    loginSection.classList.remove("hidden");
    logOutButton.classList.add("hidden");
    navItems.classList.add("hidden");
}

function LogIn() {
    loginSection.classList.add("hidden");
    profileSection.classList.remove("hidden")
    logOutButton.classList.remove("hidden");
    navItems.classList.remove("hidden");
}