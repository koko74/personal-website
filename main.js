const mainSection = document.getElementById("main-section");

const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");

const age = document.getElementById("age");
age.textContent = calculateAge("06/26/1998")

const home = document.getElementById("home");
const projects = document.getElementById("projects");
const about = document.getElementById("about");
const contact = document.getElementById("contact");

let isMenuShowing = false;

let currentDisplay = home;

handleRefresh();

function handleRefresh(){
    const previousDisplayID = sessionStorage.getItem("displayID");
    if (previousDisplayID){
        [home, projects, about, contact].forEach(section =>{
        if (section.id === previousDisplayID)
            changeDisplay(section);
        });
    }
}

function calculateAge (birthDate) {
    birthDate = new Date(birthDate);
    otherDate = new Date(Date.now());

    var years = (otherDate.getFullYear() - birthDate.getFullYear());

    if (otherDate.getMonth() < birthDate.getMonth() || 
        otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate()) {
        years--;
    }

    return years;
}

function toggleMenu(){   
    if (isMenuShowing)
        closeMenu(); 
    else
        openMenu();
}

function openMenu(){
    menuButton.classList = "fa fa-times fa-4x";
    menu.style.display = "flex"; 
    mainSection.style.opacity = "0.3";
    isMenuShowing = true;
}

function closeMenu(){
    menuButton.classList = "fa fa-bars fa-4x";
    menu.style.display = "none";
    mainSection.style.opacity = "1";
    isMenuShowing = false;
}

function showHomePage(){
    changeDisplay(home);
}

function showProjectsPage(){
    changeDisplay(projects);
}

function showAboutPage(){
    changeDisplay(about);
}

function showContactPage(){
    changeDisplay(contact);
}

function changeDisplay(newDisplay){
    if (currentDisplay !== newDisplay){
        currentDisplay.style.display = "none";
        newDisplay.style.display = "block";
        currentDisplay = newDisplay;
    }
    closeMenu();
    sessionStorage.setItem("displayID", currentDisplay.id);
}