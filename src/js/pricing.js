/* Pricing Billing Switch Module */

export function initPricing() {
  const toggleSwitch = document.querySelector('#pricingToggle');
  const monthlyLabel = document.querySelector('#monthlyLabel');
  const yearlyLabel = document.querySelector('#yearlyLabel');
  const priceElements = document.querySelectorAll('.price');
  const periodElements = document.querySelectorAll('.period');

  if (!toggleSwitch) return;

  const prices = {
    monthly: ['1,499', '3,299', '6,999'],
    yearly: ['1,199', '2,639', '5,599'] // 20% discount rates
  };

  let isYearly = false;

  function updatePrices() {
    priceElements.forEach((el, index) => {
      const targetPrice = isYearly ? prices.yearly[index] : prices.monthly[index];
      
      // Smooth text transition
      el.style.opacity = '0';
      setTimeout(() => {
        el.textContent = targetPrice;
        el.style.opacity = '1';
      }, 150);
    });

    periodElements.forEach(el => {
      el.textContent = isYearly ? '/month (billed annually)' : '/month';
    });

    if (isYearly) {
      toggleSwitch.classList.add('yearly');
      monthlyLabel.classList.remove('active');
      yearlyLabel.classList.add('active');
    } else {
      toggleSwitch.classList.remove('yearly');
      monthlyLabel.classList.add('active');
      yearlyLabel.classList.remove('active');
    }
  }

  toggleSwitch.addEventListener('click', () => {
    isYearly = !isYearly;
    updatePrices();
  });

  if (monthlyLabel) {
    monthlyLabel.addEventListener('click', () => {
      isYearly = false;
      updatePrices();
    });
  }

  if (yearlyLabel) {
    yearlyLabel.addEventListener('click', () => {
      isYearly = true;
      updatePrices();
    });
  }
}
