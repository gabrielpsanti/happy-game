document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form.contato');
  if (!form) return;

  const nome = form.querySelector('#nome');
  const email = form.querySelector('#email');
  const mensagem = form.querySelector('#mensagem');

  const modalEl = document.getElementById('confirmModal');
  const confNome = document.getElementById('confNome');
  const confEmail = document.getElementById('confEmail');
  const confMensagem = document.getElementById('confMensagem');
  const confirmBtn = document.getElementById('confirmSend');

  // Prefer Bootstrap modal if available, otherwise fall back to simple show/hide
  const bootstrapModal = (window.bootstrap && modalEl) ? new bootstrap.Modal(modalEl) : null;

  function showModal() {
    if (confNome) confNome.textContent = nome?.value || '—';
    if (confEmail) confEmail.textContent = email?.value || '—';
    if (confMensagem) confMensagem.textContent = mensagem?.value || '—';

    if (bootstrapModal) {
      bootstrapModal.show();
    } else if (modalEl) {
      modalEl.style.display = 'block';
    }
  }

  function hideModal() {
    if (bootstrapModal) {
      bootstrapModal.hide();
    } else if (modalEl) {
      modalEl.style.display = 'none';
    }
  }

  // Intercept submit to show the confirmation modal first
  form.addEventListener('submit', (e) => {
    // If already confirmed, let it pass
    if (form.dataset.confirmed === 'true') {
      form.dataset.confirmed = '';
      return;
    }

    e.preventDefault();
    showModal();
  });

  // On confirm, submit the form programmatically with default behavior
  if (confirmBtn) {
    confirmBtn.addEventListener('click', () => {
      form.dataset.confirmed = 'true';
      hideModal();
      // Use native submit to bypass our listener preventDefault
      form.submit();
    });
  }
});
