
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
const hobbiesList = document.getElementById('hobbies-list');

nameElement.value = userData.fullName;
emailElement.value = userData.email;

userData.hobbies.forEach(hobby => {
  const li = document.createElement('li');
  const input = document.createElement('input');

  input.type = "text";
  input.className = "editable-field";
  input.value = hobby;

  li.appendChild(input);
  hobbiesList.appendChild(li);
})
