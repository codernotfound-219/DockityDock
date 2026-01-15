
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
const hobbiesContainer = document.getElementById('hobbies-list');

nameElement.value = userData.fullName;
emailElement.value = userData.email;

userData.hobbies.forEach(hobby => {
  const chipWrapper = document.createElement('div');
  chipWrapper.className = 'hobby-chip';

  const input = document.createElement('input');
  input.type = "text";
  input.className = "chip-input";
  input.value = hobby;
  input.style.width = (hobby.length + 1) + 'ch';

  input.addEventListener('input', function() {
    this.style.width = (this.value.length + 1) + 'ch';
  });

  chipWrapper.appendChild(input);
  hobbiesContainer.appendChild(chipWrapper);
})
