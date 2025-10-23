import homeImage from "./assets/restaurant_home_image.png";

export function homeLoad(){
    const content = document.getElementById('content');
    content.innerHTML = '';

    const headline = document.createElement('h1');
    headline.textContent = "Welcome to My Biryani Restaurant!";
    content.appendChild(headline);

    const description = document.createElement('p');
    description.textContent = "Experience the authentic flavors of India with our delicious biryani dishes, crafted with traditional spices and fresh ingredients.";
    content.appendChild(description);

    //image container
    const imageContainer = document.createElement('div');
    imageContainer.classList.add("image-container");
    content.appendChild(imageContainer);

    const homeImg = document.createElement('img');
    homeImg.src = homeImage;
    homeImg.classList.add("home-image");
    imageContainer.appendChild(homeImg);
}