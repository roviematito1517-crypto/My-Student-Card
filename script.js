const container = document.getElementById("profile-container");

const card = document.createElement('div');
const picture = document.createElement('img');
const headingName = document.createElement('h2');
const bio = document.createElement('p');

card.className = 'profile-card';

picture.src = 'mypicture.jpg';
picture.alt = 'Student Photo';
picture.className = 'profile-picture';

headingName.textContent = 'Rovie Matito'
bio.textContent = 'Bachelor of Science in Information System Student 2nd Year';

card.appendChild(picture);
card.appendChild(headingName);
card.appendChild(bio);

container.appendChild(card);



