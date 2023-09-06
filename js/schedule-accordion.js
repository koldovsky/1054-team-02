document.addEventListener("DOMContentLoaded", function () {
  var accordionToggles = document.querySelectorAll(".accordion-toggle");

  accordionToggles.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      var accordionContent = toggle.nextElementSibling;

      if (accordionContent) {
        if (window.getComputedStyle(accordionContent).display === "none") {
          accordionContent.style.display = "block";
        } else {
          accordionContent.style.display = "none";
        }

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
