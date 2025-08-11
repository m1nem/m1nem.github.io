document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const form = e.target;
  const responseEl = document.getElementById('formResponse');
  const formData = new FormData(form);

  try {
    const res = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
      responseEl.textContent = '✅ Thanks for your message!';
      responseEl.className = 'text-green-500';
      form.reset();
    } else {
      const data = await res.json();
      if (data.errors) {
        responseEl.textContent = data.errors.map(err => err.message).join(', ');
      } else {
        responseEl.textContent = '❌ Something went wrong.';
      }
      responseEl.className = 'text-red-500';
    }
  } catch (err) {
    responseEl.textContent = '⚠️ Error sending message.';
    responseEl.className = 'text-red-500';
  }
});