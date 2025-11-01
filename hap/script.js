document.addEventListener('DOMContentLoaded', function() {
    const questionScreen = document.getElementById('question-screen');
    const celebrationScreen = document.getElementById('celebration-screen');
    const motivationalScreen = document.getElementById('motivational-screen');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const restartBtn = document.getElementById('restart-btn');
    const tryAgainBtn = document.getElementById('try-again-btn');
    const birthdayMessage = document.getElementById('birthday-message');
    const motivationalMessage = document.getElementById('motivational-message');

    // Birthday messages
    const birthdayMessages = [
        "You are an amazing person who brings so much joy to everyone around you!",
        "Today is all about you - celebrate how wonderful you are!",
        "The world is brighter because you're in it. Happy Birthday!",
        "You're not getting older, you're getting more fabulous!",
        "May your year be filled with love, laughter, and all your heart desires.",
        "We love you more than words can express! Enjoy your special day!"
    ];

    // Motivational messages
    const motivationalMessages = [
        "Every new year is a chance to grow and become even more amazing.",
        "You're stronger than you think, and the following year will be your best yet!",
        "Birthdays are just milestones on your incredible journey.",
        "It's okay to take things one step at a time. You've got this!",
        "New beginnings can be scary, but they lead to beautiful new chapters.",
        "You're capable of amazing things - believe in yourself!"
    ];

    yesBtn.addEventListener('click', function() {
        // Show celebration screen
        questionScreen.classList.add('hidden');
        celebrationScreen.classList.remove('hidden');
        
        // Trigger confetti
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });

        // Display random birthday message
        const randomMessage = birthdayMessages[Math.floor(Math.random() * birthdayMessages.length)];
        birthdayMessage.innerHTML = `${randomMessage} <span class="heart">❤️</span>`;
    });

    noBtn.addEventListener('click', function() {
        // Show motivational screen
        questionScreen.classList.add('hidden');
        motivationalScreen.classList.remove('hidden');
        
        // Display random motivational message
        const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
        motivationalMessage.textContent = randomMessage;
    });

    restartBtn.addEventListener('click', function() {
        celebrationScreen.classList.add('hidden');
        questionScreen.classList.remove('hidden');
    });

    tryAgainBtn.addEventListener('click', function() {
        motivationalScreen.classList.add('hidden');
        questionScreen.classList.remove('hidden');
    });

    // Add some floating balloons animation
    for (let i = 0; i < 5; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'floating absolute text-4xl';
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.top = `${Math.random() * 100}%`;
        balloon.style.zIndex = '-1';
        balloon.textContent = '🎈';
        document.body.appendChild(balloon);
    }
});