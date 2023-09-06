const clockContainer = document.querySelector(".latest-news__clock");

clockContainer.innerText = new Date().toLocaleTimeString('uk-UA');

setInterval(() => {
    clockContainer.innerText = new Date().toLocaleTimeString('uk-UA');
}, 1000);