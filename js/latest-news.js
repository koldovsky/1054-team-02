const cards = [
    {
        id: 1,
        image: 'img/latest-news/lines.jpg',
        name: 'Music',
        description: 'Britney Spears Celebrates 20-Year Anniversary of "...Baby One More Time"',
    },
    {
        id: 2,
        image: 'img/latest-news/girl-with-a-can.jpg',
        name: 'Music',
        description: 'Christina Aguilera Features a Very Unlikely Celebrity on a Song',
    },
    {
        id: 3,
        image: 'img/latest-news/leaves.jpg',
        name: 'Music',
        description: 'A Group The Chainsmokers Announces the Next Album',
    },
];

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
