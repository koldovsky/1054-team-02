const response = await fetch('api/latest-news.json');
const cards = await response.json();


renderCard(cards);

    function renderCard(cards) {
         const cardsContainer = document.querySelector('.latest-news__cards');
         cardsContainer.innerHTML = '';
            for (const card of cards) {
                cardsContainer.innerHTML += 
                `<article class="latest-news__cards-item product">
                     <div class="product__image-container">
                     <img  src="${card.image}" alt="Lines" class="product__image">
                </div>
                <div class="product__category">
                    <p class="product__title">${card.name}</p>
                    <h3 class="product__text">${card.description}</h3>
                 </div>
            </article>`;
    }
}
