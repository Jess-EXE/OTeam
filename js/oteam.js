var loginSection = document.getElementById("login-section");
var profileSection = document.getElementById("profile-section");
var logOutButton = document.getElementById("log-out-button")
var navItems = document.getElementById("nav-list-item");
var addClientSection = document.getElementById("add-client-section");
var interventionSection = document.getElementById("interventions-section");
var homeNavLink = document.getElementById("home-nav-link")
var resourcesNavLink = document.getElementById("resources-nav-link")

function LogOut() {
    profileSection.classList.add("hidden");
    loginSection.classList.remove("hidden");
    logOutButton.classList.add("hidden");
    navItems.classList.add("hidden");
    homeNavLink.classList.remove("active");
    interventionSection.classList.add("hidden");
}

function LogIn() {
    loginSection.classList.add("hidden");
    profileSection.classList.remove("hidden");
    logOutButton.classList.remove("hidden");
    navItems.classList.remove("hidden");
    homeNavLink.classList.add("active");
    
}

function ShowAddClientSection() {
    addClientSection.classList.remove("hidden");
    profileSection.classList.add("hidden");
}

function SubmitAdd() {
    addClientSection.classList.add("hidden");
    profileSection.classList.remove("hidden");
}

function ShowInterventions() {
    profileSection.classList.add("hidden");
    interventionSection.classList.remove("hidden");
    homeNavLink.classList.remove("active");
    resourcesNavLink.classList.add("active");
    addClientSection.classList.add("hidden");
}

function ShowHome() {
    resourcesNavLink.classList.remove("active");
    homeNavLink.classList.add("active");
    interventionSection.classList.add("hidden");
    profileSection.classList.remove("hidden");
    addClientSection.classList.add("hidden");
}