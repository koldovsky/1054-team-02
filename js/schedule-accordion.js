export default function () {
  document.addEventListener("DOMContentLoaded", function () {
    var accordionToggles = document.querySelectorAll(".accordion-toggle");

    accordionToggles.forEach(function (toggle) {
      toggle.addEventListener("click", function () {
        var accordionContent = toggle.nextElementSibling;

        // Перевірка, чи елемент з таким класом існує
        if (accordionContent) {
          // Переключення між відображенням і приховуванням активного контенту
          if (window.getComputedStyle(accordionContent).display === "none") {
            accordionContent.style.display = "block";
          } else {
            accordionContent.style.display = "none";
          }

          // Переключення стрілки у заголовку акордеону
          var arrow = toggle.querySelector(".accordion-toggle::after");
          if (arrow.textContent === '\u25B6') {
            arrow.textContent = '\u25BC';
          } else {
            arrow.textContent = '\u25B6';
          }
        }
      });
    });
  });
}
