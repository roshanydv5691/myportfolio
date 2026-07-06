// =============================================
//  ROSHAN YADAV PORTFOLIO — script.js
// =============================================

/* ---- Navbar scroll effect ---- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* ---- Hamburger menu ---- */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ---- Scroll Reveal ---- */
const revealElements = document.querySelectorAll(
  '.about-card, .timeline-card, .timeline-item, .exp-card, .skill-card, .project-card, .contact-item, .contact-form'
);

revealElements.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger animation
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealElements.forEach(el => revealObserver.observe(el));

/* ---- Skill bar animation ---- */
const skillBars = document.querySelectorAll('.skill-bar');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => skillObserver.observe(bar));

/* ---- Active nav link highlight ---- */
const sections = document.querySelectorAll('section[id]');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${id}`) {
          link.style.color = 'var(--gold)';
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(sec => navObserver.observe(sec));

/* ---- Contact form ---- */
function handleSubmit(e) {
  e.preventDefault();
  const btn     = document.getElementById('submit-btn');
  const success = document.getElementById('form-success');
  const form    = document.getElementById('contact-form');

  btn.textContent = 'Sending... ⏳';
  btn.disabled = true;

  // Simulate sending delay
  setTimeout(() => {
    success.style.display = 'block';
    form.reset();
    btn.textContent = 'Message Sent! ✅';
    setTimeout(() => {
      btn.textContent = 'Send Message 🚀';
      btn.disabled = false;
      success.style.display = 'none';
    }, 4000);
  }, 1200);
}

/* ---- Smooth hover effect on floating cards ---- */
document.querySelectorAll('.floating-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.background = 'rgba(232,184,75,0.12)';
    card.style.borderColor = 'rgba(232,184,75,0.4)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.background = '';
    card.style.borderColor = '';
  });
});

/* ---- Typing cursor blink on name (subtle) ---- */
const heroName = document.querySelector('.hero-name');
if (heroName) {
  heroName.style.borderRight = '3px solid transparent';
}
