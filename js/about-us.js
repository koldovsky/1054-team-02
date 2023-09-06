const commentForm = document.getElementById('comment-form');
const commentList = document.querySelector('.comment-list');

commentForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const commentText = document.getElementById('comment').value;
    const rating = parseInt(document.getElementById('rating').value);
    const commentItem = document.createElement('li');
    commentItem.innerHTML = `
        <strong>${name}</strong> (Rating: ${rating}):<br>
        ${commentText}
    `;

    commentList.appendChild(commentItem);

    commentForm.reset();
});
