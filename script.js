const observers = document.querySelectorAll('.animate-on-scroll');
  const options = { threshold: 0.2 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, options);

  observers.forEach(el => observer.observe(el));

// Click listener
  document.querySelectorAll('.offcanvas a.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const offcanvas = bootstrap.Offcanvas.getInstance(
      document.getElementById('offcanvasNavbar')
    );
    offcanvas.hide();
  });
});

// Disable past dates in booking form
const dateInput = document.querySelector('input[name="event_date"]');
if (dateInput) {
  const today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', today);
}


// Show success
if (window.location.hash === '#success') {
  const successModal = new bootstrap.Modal(
    document.getElementById('successModal')
  );
  successModal.show();

  //Polisher like KIWI
  history.replaceState(null, '', window.location.pathname);
}

//  spinner control like John Cena
const bookingForm = document.querySelector('#bookingModal form');

if (bookingForm) {
  bookingForm.addEventListener('submit', (event) => {
    if (!bookingForm.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      bookingForm.classList.add('was-validated');
      return;
    }

    // Validation passed → show spinner
    const btn = document.getElementById('submitBtn');
    const spinner = document.getElementById('submitSpinner');
    const text = btn.querySelector('.btn-text');

    spinner.classList.remove('d-none');
    text.textContent = 'Sending...';
    btn.disabled = true;
  });
}



