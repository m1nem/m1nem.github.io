document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();
  const response = document.getElementById('formResponse');

  if (!name || !email || !message) {
    response.textContent = 'Wypełnij wszystkie pola, no ziomuś!';
    response.className = 'text-red-500';
    return;
  }

  // Prosta symulacja wysyłki - normalnie tu by był backend lub API
  response.textContent = 'Dzięki za wiadomość, odezwę się wkrótce!';
  response.className = 'text-green-500';

  // Czyszczenie formy
  this.reset();
});
