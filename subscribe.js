const newsWords = [
    "AI", "Quantum", "Cybersecurity", "Innovation", "Tech", "Blockchain", "Data", "Cloud", "IoT" ,"Robotics"
];

const createRain = () => {
    const rainContainer = document.createElement('div');
    rainContainer.className = 'rain-container';
    document.body.appendChild(rainContainer);

    

    for (let i = 0; i < 100; i++) {
        const word = document.createElement('div');
        word.className = 'rain-word';
        word.textContent = newsWords[Math.floor(Math.random() * newsWords.length)];
        word.style.left = `${Math.random() * 100}vw`;
        word.style.animationDuration = `${Math.random() * 3 + 2}s`;
        word.style.animationDelay = `${Math.random() * 5}s`;
        rainContainer.appendChild(word);
    }

    rainContainer.addEventListener('mousemove', (e) => {
        const words = document.querySelectorAll('.rain-word');
        words.forEach(word => {
            const rect = word.getBoundingClientRect();
            const distance = Math.hypot(e.clientX - rect.left, e.clientY - rect.top);
            if (distance < 100) {
                word.style.transform = `translate(${(e.clientX - rect.left) * 0.5}px, ${(e.clientY - rect.top) * 0.5}px)`;
                word.style.transition = 'transform 0.5s ease';
            } else {
                word.style.transform = '';
                word.style.transition = '';
            }
        });
    });
};

createRain();

document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Hide the form
    document.querySelector('.form-container').style.display = 'none';

    // Create the thank-you card
    const thankYouCard = document.createElement('div');
    thankYouCard.className = 'thank-you-card';
    thankYouCard.innerHTML = `
        <h2>Welcome Aboard!</h2>
        <p> You’re all set to receive the latest updates📩</p>
    `;

    // Append the card to the body
    document.body.appendChild(thankYouCard);
});
