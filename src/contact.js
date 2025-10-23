export function contact() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const headline = document.createElement('h2');
  headline.textContent = 'Contact Us';
  content.appendChild(headline);

  const contactInfo = document.createElement('p');
  contactInfo.textContent = 'Call us at 123-456-7890 or email info@MyBiryaniRestaurant.com';
  content.appendChild(contactInfo);
}