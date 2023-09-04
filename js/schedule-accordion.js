document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll(".accordion-toggle");

    toggles.forEach((toggle) => {
        toggle.addEventListener("click", function () {
            const content = this.nextElementSibling;
            if (window.getComputedStyle(content).display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
            
        });
    });
});