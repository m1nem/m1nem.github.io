document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();
  const response = document.getElementById('formResponse');

  if (!name || !email || !message) {
    response.textContent = 'Fill the form properly!';
    response.className = 'text-red-500';
    return;
  }

  response.textContent = 'Thanks for the message!';
  response.className = 'text-green-500';

  this.reset();
});
