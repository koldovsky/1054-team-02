const emailInput = document.getElementById('emailInput');
const subscribeButton = document.getElementById('subscribeButton');


subscribeButton.addEventListener('click', function() {
    const email = emailInput.value;
    if (isValidEmail(email)) {
        alert('Ви підписалися на новини!');
    } else {
        alert('Будь ласка, введіть коректний електронний адрес');
    }
});

function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}