
// DATA:
const userData = {
  fullName: "Ashten219",
  email: "aswattisking@yahoo.email.com",
  hobbies: [
    "Photography",
    "Open Source Dev",
    "Hiking"
  ],
};

const nameElement = document.getElementById('name');
const emailElement = document.getElementById('email');
const hobbieslistElement = document.getElementById('hobbies-list');

nameElement.textContent = userData.fullName;
emailElement.textContent = userData.email;

userData.hobbies.forEach(hobby => {
  const li = document.createElement('li');
  li.textContent = hobby;
  hobbieslistElement.appendChild(li);
})
