function revealContent() {
    // Hide envelope section
    document.getElementById('envelope-section').classList.add('hidden');

    // Show birthday section
    document.getElementById('birthday-section').classList.remove('hidden');

    // Generate heart tree
    const heartTree = document.getElementById('heart-tree');
    for (let i = 0; i < 200; i++) {
        const heart = document.createElement('span');
        heart.textContent = '❤️';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
        heart.style.fontSize = `${Math.random() * 15 + 10}px`;
        heartTree.appendChild(heart);
    }

    // Start the countdown
    updateCountdown();
}

function updateCountdown() {
    const birthday = new Date('2005-12-05T00:00:00');
    const now = new Date();
    const diff = birthday - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('countdown').textContent = `
        ${Math.abs(days)} Days, ${Math.abs(hours)} Hours, 
        ${Math.abs(minutes)} Minutes, ${Math.abs(seconds)} Seconds
    `;

    setTimeout(updateCountdown, 1000);
}