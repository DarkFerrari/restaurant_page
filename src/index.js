import "./styles.css";
import homeImage from "./assets/restaurant_home_image.png";

console.log('Hello, from restaurant index.js!');

const imageContainer = document.createElement('div');
imageContainer.classList.add("image-container");
document.body.appendChild(imageContainer);

const image = document.createElement('img');
image.src = homeImage;
imageContainer.appendChild(image);
image.classList.add("home-image");


