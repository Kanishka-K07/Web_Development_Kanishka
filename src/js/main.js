/* NorthPeak Digital - Main JS Entrypoint */
import '../css/main.css';
import '../css/components.css';
import '../css/responsive.css';

import { initNavigation } from './navigation.js';
import { initPricing } from './pricing.js';
import { initValidation } from './validation.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initPricing();
  initValidation();

  // Reveal Animations on Scroll
  const revealElements = document.querySelectorAll('.service-card, .testimonial-card, .pricing-card');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    revealObserver.observe(el);
  });
});
