document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');

  const storedState = localStorage.getItem('feedback-form-state');
  if (storedState) {
    const { email, message } = JSON.parse(storedState);
    emailInput.value = email;
    messageInput.value = message;
  }
  function saveToLocalStorage() {
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }

  form.addEventListener('input', event => {
    if (event.target.matches('input[name="email"], textarea[name="message"]')) {
      saveToLocalStorage();
    }
  });

  form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };

    localStorage.removeItem('feedback-form-state');

    emailInput.value = '';
    messageInput.value = '';

    console.log(formData);
  });
});
