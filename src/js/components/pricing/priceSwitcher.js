export const usePriceSwitcher = () => {
  const switcher = document.querySelector('[data-price="switcher"]');

  const starterPrice = document.querySelector('[data-price="starter"]');
  const popularPrice = document.querySelector('[data-price="popular"]');
  const enterprisePrice = document.querySelector('[data-price="enterprise"]');

  const periodSwitcher = document.querySelectorAll('[data-period="switcher"]');

  const priceList = {
    starter: {
      default: '$120',
      withSale: '$100',
    },
    popular: {
      default: '$1680',
      withSale: '$1400',
    },
    enterprise: {
      default: '$2520',
      withSale: '$2100',
    },
  };

  const peroidList = {
    default: '/mo',
    withSale: '/day',
  };

  const setPriceWithSale = () => {
    starterPrice.textContent = priceList.starter.withSale;
    popularPrice.textContent = priceList.popular.withSale;
    enterprisePrice.textContent = priceList.enterprise.withSale;

    periodSwitcher.forEach((period) => {
      period.textContent = peroidList.default;
    });
  };

  const setDefaultPrice = () => {
    starterPrice.textContent = priceList.starter.default;
    popularPrice.textContent = priceList.popular.default;
    enterprisePrice.textContent = priceList.enterprise.default;

    periodSwitcher.forEach((period) => {
      period.textContent = peroidList.withSale;
    });
  };

  switcher.checked = true;
  setPriceWithSale();

  switcher.addEventListener('click', () => {
    if (switcher.checked) {
      setPriceWithSale();
    } else {
      setDefaultPrice();
    }
  });
};
