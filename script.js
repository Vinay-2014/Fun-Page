const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');

// Move the "No" button
noButton.addEventListener('mouseenter', () => {
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 50);
    noButton.style.position = 'absolute'; // Make sure it's positioned absolutely
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
});

// Navigate to the emoji page when "Yes" is clicked
yesButton.addEventListener('click', () => {
    alert("Yes button clicked! Redirecting...");
    window.location.href = 'emojis.html'; // Redirect to the emoji page
});
