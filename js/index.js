document.addEventListener('partialsLoaded', () => {
    import('./burger-menu.js'); 
    import('./latest-news-clock.js');
    import('./win-animate.js');
    import('./schedule-accordion.js').then(module => module.default())
    import('./latest-news.js');
    import('./contact-form.js');
    import('./careers-animate.js');
});