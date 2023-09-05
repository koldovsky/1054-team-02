document.addEventListener('DOMContentLoaded', () => {
  const rows = document.querySelectorAll('.schedule__row');
  const contents = document.querySelectorAll('.accordion-content');


  function closeAllAccordions() {
    contents.forEach((content) => {
      content.style.display = 'none';
    });
  }

  
  function addClickHandlersOnSmallScreens() {
    if (window.innerWidth <= 768) {
      rows.forEach((row, index) => {
        row.addEventListener('click', () => {
          closeAllAccordions();

          
          contents[index].style.display = 'block';
        });
      });
    }
  }

  
  addClickHandlersOnSmallScreens();

  
  window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
      addClickHandlersOnSmallScreens();
    } else {
      
      rows.forEach((row) => {
        row.removeEventListener('click', closeAllAccordions);
      });
    }
  });
});