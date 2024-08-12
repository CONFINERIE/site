// Typewriter effect
const typewriterText = document.getElementById('typewriter-text');
const typewriter = new Typewriter(typewriterText, {
  loop: true,
  delay: 50,
});

typewriter.typeString('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.')
  .pauseFor(1000)
  .deleteChars(10)
  .typeString('Hello World!')
  .pauseFor(1000)
  .deleteChars(10)
  .typeString('Welcome to Entreprise!')
  .pauseFor(1000)
  .start();

// Nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Form validation
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const message = messageInput.value;

  if (name && email && phone && message) {
    alert('Message sent successfully!');
  } else {
    alert('Please fill in all fields!');
  }
});