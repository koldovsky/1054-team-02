// Отримуємо всі елементи з класом "accordion-toggle"
const accordionToggles = document.querySelectorAll('.accordion-toggle');

// Додаємо обробник подій для кожного елемента "accordion-toggle"
accordionToggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    // Знаходимо батьківський елемент "schedule__row"
    const row = toggle.closest('.schedule__row');
    
    // Знаходимо всі елементи "accordion-content" в межах батьківського елемента
    const content = row.querySelectorAll('.accordion-content');
    
    // Перевіряємо, чи активний акордеон
    const isActive = row.classList.contains('active');
    
    // Закриваємо всі активні акордеони
    accordionToggles.forEach((otherToggle) => {
      otherToggle.closest('.schedule__row').classList.remove('active');
    });
    
    // Відкриваємо або закриваємо акордеон в залежності від стану
    if (!isActive) {
      content.forEach((item) => {
        item.style.display = 'block';
      });
      row.classList.add('active');
    } else {
      content.forEach((item) => {
        item.style.display = 'none';
      });
      row.classList.remove('active');
    }
  });
});
