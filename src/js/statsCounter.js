const statsCounter = () => {
  // dom elements
  const statsNumbers = document.querySelector('.stats');
  const counters = document.querySelectorAll('.stat__number');

  // observe container when scoll
  const options = { rootMargin: '1px' };
  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.target) {
        countStats();
      }
    });
  }, options);
  observer.observe(statsNumbers);

  // count stats
  function countStats() {
    counters.forEach((counter) => {
      counter.innerText = '0';

      const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        const increment = target / 200;

        if (c < target) {
          counter.innerText = `${Math.ceil(c + increment)}`;
          setTimeout(updateCounter, 1);
        } else {
          counter.innerText = target;
        }
      };
      updateCounter();
    });
  }
};

export default statsCounter;
