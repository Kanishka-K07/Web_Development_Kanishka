/* Client-Side Contact Form Validation & Modal Module */

export function initValidation() {
  const form = document.querySelector('#contactForm');
  const modal = document.querySelector('#successModal');
  const modalCloseBtn = document.querySelector('#modalCloseBtn');

  if (!form) return;

  const fields = {
    name: {
      input: form.querySelector('#fullName'),
      group: form.querySelector('#fullNameGroup'),
      validate: (val) => val.trim().length >= 2,
      errorMsg: 'Please enter your full name (at least 2 characters).'
    },
    email: {
      input: form.querySelector('#emailAddress'),
      group: form.querySelector('#emailGroup'),
      validate: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()),
      errorMsg: 'Please enter a valid email address.'
    },
    service: {
      input: form.querySelector('#serviceSelect'),
      group: form.querySelector('#serviceGroup'),
      validate: (val) => val !== '',
      errorMsg: 'Please select a service.'
    },
    message: {
      input: form.querySelector('#projectDetails'),
      group: form.querySelector('#messageGroup'),
      validate: (val) => val.trim().length >= 10,
      errorMsg: 'Please enter project details (at least 10 characters).'
    }
  };

  function validateField(fieldKey) {
    const field = fields[fieldKey];
    if (!field || !field.input) return true;

    const isValid = field.validate(field.input.value);
    
    if (!isValid) {
      field.group.classList.add('error');
      field.group.classList.remove('success');
      field.input.setAttribute('aria-invalid', 'true');
    } else {
      field.group.classList.remove('error');
      field.group.classList.add('success');
      field.input.setAttribute('aria-invalid', 'false');
    }

    return isValid;
  }

  // Bind real-time blur and input events
  Object.keys(fields).forEach(key => {
    const field = fields[key];
    if (field && field.input) {
      field.input.addEventListener('blur', () => validateField(key));
      field.input.addEventListener('input', () => {
        if (field.group.classList.contains('error')) {
          validateField(key);
        }
      });
    }
  });

  // Form Submit Handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isFormValid = true;
    Object.keys(fields).forEach(key => {
      const isFieldValid = validateField(key);
      if (!isFieldValid) isFormValid = false;
    });

    if (isFormValid) {
      // Show Success Modal
      if (modal) {
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
      }

      // Reset Form State
      form.reset();
      Object.keys(fields).forEach(key => {
        fields[key].group.classList.remove('success', 'error');
        fields[key].input.removeAttribute('aria-invalid');
      });
    } else {
      // Focus first invalid element
      const firstInvalid = form.querySelector('[aria-invalid="true"]');
      if (firstInvalid) firstInvalid.focus();
    }
  });

  // Close Modal Handler
  if (modalCloseBtn && modal) {
    modalCloseBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
      }
    });
  }
}
