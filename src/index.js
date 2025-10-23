import "./styles.css";
import {homeLoad} from "./homePage.js";
import {menu} from "./menu.js";
import {contact} from "./contact.js";   

homeLoad();
console.log('Hello, from restaurant index.js!');

const homeButton = document.getElementById('home-btn');
const menuButton = document.getElementById('menu-btn');
const contactButton = document.getElementById('contact-btn');

homeButton.addEventListener('click', homeLoad);
menuButton.addEventListener('click', menu);
contactButton.addEventListener('click', contact);




