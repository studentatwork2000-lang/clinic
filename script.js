const nav = document.getElementById('top-nav');
const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const form = document.getElementById('proposal-interest-form');
const statusBox = document.getElementById('form-status');
const submitButton = document.getElementById('submit-button');

function updateNavBackground() {
  if (!nav) return;
  if (window.scrollY > 50) {
    nav.classList.add('bg-white', 'shadow-md');
    nav.classList.remove('bg-transparent');
  } else {
    nav.classList.add('bg-transparent');
    nav.classList.remove('bg-white', 'shadow-md');
  }
}

function setMenuOpen(isOpen) {
  if (!menuButton || !mobileMenu) return;
  mobileMenu.classList.toggle('open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  const icon = menuButton.querySelector('.material-symbols-outlined');
  if (icon) icon.textContent = isOpen ? 'close' : 'menu';
}

function showStatus(message, type) {
  if (!statusBox) return;
  statusBox.textContent = message;
  statusBox.className = `rounded-lg px-4 py-3 text-sm ${type === 'success' ? 'bg-secondary-container/30 text-on-secondary-container border border-secondary/20' : 'bg-error-container text-on-error-container border border-error/20'}`;
}

function setFieldError(field, visible) {
  const error = document.getElementById(`${field.id}-error`);
  if (error) error.classList.toggle('hidden', !visible);
  field.setAttribute('aria-invalid', String(visible));
}

window.addEventListener('scroll', updateNavBackground);
updateNavBackground();

if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => setMenuOpen(!mobileMenu.classList.contains('open')));
  mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenuOpen(false)));
  document.addEventListener('click', (event) => {
    if (!mobileMenu.classList.contains('open')) return;
    if (!mobileMenu.contains(event.target) && !menuButton.contains(event.target)) setMenuOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenuOpen(false);
  });
}

if (form) {
  form.addEventListener('submit', async (event) => {
    const requiredFields = [form.elements.name, form.elements.email, form.elements.message];
    let hasError = false;
    requiredFields.forEach((field) => {
      const invalid = !field.checkValidity();
      setFieldError(field, invalid);
      hasError = hasError || invalid;
    });
    if (hasError) {
      event.preventDefault();
      showStatus('Please complete the required fields before sending your enquiry.', 'error');
      return;
    }

    if (!window.fetch || !window.URLSearchParams) return;
    event.preventDefault();
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    try {
      const body = new URLSearchParams(new FormData(form)).toString();
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      if (!response.ok) throw new Error('Form submission failed');
      form.reset();
      showStatus('Thank you. Your enquiry has been received. MercyD Solution will contact you shortly.', 'success');
    } catch (error) {
      showStatus('Something went wrong. Please try again or contact mercydsolution@gmail.com directly.', 'error');
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = 'Send Enquiry';
    }
  });
}
