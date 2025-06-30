let teleportCount = 0;
const maxTeleports = 2;
const button = document.querySelector('.modern-button');
const container = document.querySelector('.container');
const messages = ["Don't click me again..", "I'm warning you.."]
const popupMessages = [""]
let messageIndex = 0

button.addEventListener('click', () => {
    if (teleportCount < maxTeleports) {
        // Remove centering for teleport
        container.style.justifyContent = 'flex-start';
        container.style.alignItems = 'flex-start';
        container.style.position = 'relative';
        button.style.position = 'absolute';
        // Get container size
        const containerRect = container.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();
        // Calculate random position within container
        const maxLeft = containerRect.width - buttonRect.width;
        const maxTop = containerRect.height - buttonRect.height;
        const left = Math.random() * maxLeft;
        const top = Math.random() * maxTop;
        button.style.left = `${left}px`;
        button.style.top = `${top}px`;
        teleportCount++;
        button.textContent = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length;
    } else if (teleportCount === maxTeleports) {
        // Hide the button
        button.style.display = 'none';
        // Create and display the image at the center
        const img = document.createElement('img');
        const h2 = document.createElement('h2')
        h2.textContent = 'I told you....'
        img.src = 'itoldyou.webp';
        img.loading = 'eager'
        img.alt = 'I told you';
        img.className = 'centered-image';
        container.appendChild(img);
        container.appendChild(h2);
        const githubIconContainer = document.querySelector('.github-icon-container');
        if (githubIconContainer) {
            githubIconContainer.style.display = 'block';
        }
        // Center the container again
        container.style.justifyContent = 'center';
        container.style.alignItems = 'center';
    }
    // Button click animation
    button.style.transform = 'scale(0.85)';
    setTimeout(() => {
        button.style.transform = '';
    }, 100);
});
