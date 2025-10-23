import "./styles.css";
import {homeLoad} from "./homePage.js";
import {menu} from "./menu.js";
import {contact} from "./contact.js";   

const homeButton = document.getElementById('home-btn');
const menuButton = document.getElementById('menu-btn');
const contactButton = document.getElementById('contact-btn');
const buttons = [homeButton, menuButton, contactButton];

function clearActiveButton() {
    buttons.forEach((button) => button.classList.remove('active'));
}

function showHome() {
    clearActiveButton();
    homeButton.classList.add('active');
    homeLoad();
}

function showMenu() {
    clearActiveButton();
    menuButton.classList.add('active');
    menu();
}

function showContact() {
    clearActiveButton();
    contactButton.classList.add('active');
    contact();
}


homeLoad();
console.log('Hello, from restaurant index.js!');

homeButton.addEventListener('click', showHome);
menuButton.addEventListener('click', showMenu);
contactButton.addEventListener('click', showContact);




