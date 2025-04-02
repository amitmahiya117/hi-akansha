// Common functions
function createFloatingElements(containerClass, elements, count = 15) {
    const container = document.querySelector(containerClass);
    if (!container) return;
    
    // Clear existing elements
    container.innerHTML = '';
    
    for (let i = 0; i < count; i++) {
        const element = document.createElement('div');
        element.innerHTML = elements[Math.floor(Math.random() * elements.length)];
        element.style.position = 'absolute';
        element.style.fontSize = `${Math.random() * 20 + 10}px`;
        element.style.left = `${Math.random() * 100}vw`;
        element.style.top = `${Math.random() * 100}vh`;
        element.style.opacity = Math.random() * 0.5 + 0.3;
        element.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
        element.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(element);
    }
}

function redirectToPage(page) {
    const overlay = document.getElementById('redirect-overlay');
    if (overlay) {
        overlay.classList.remove('hidden');
        setTimeout(() => {
            window.location.href = page;
        }, 2000);
    }
}

// Page-specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create floating elements based on page
    if (document.querySelector('.fun-content')) {
        createFloatingElements('.floating-emojis', ['😂', '🤣', '😆', '😜', '🤪', '🎭', '🤡', '👻']);
    } 
    else if (document.querySelector('.compliments-content')) {
        createFloatingElements('.floating-stars', ['🌟', '⭐', '✨', '💫', '🌠', '💖', '💕', '💗']);
    }
    else {
        createFloatingElements('.floating-hearts', ['❤️', '💖', '💕', '💗', '💓', '💞', '💝', '💘']);
    }

    // Home page
    const homeNextBtn = document.getElementById('next-btn');
    if (homeNextBtn && document.querySelector('.home-content')) {
        homeNextBtn.addEventListener('click', function() {
            redirectToPage('fun.html');
        });
    }

    // Fun page
    const jokeBtn = document.getElementById('tell-joke');
    if (jokeBtn) {
        const jokes = [
            "Why don't eggs tell jokes? They'd crack each other up! 🥚😂",
            "What do you call a fake noodle? An impasta! 🍝",
            "How do you organize a space party? You planet! 🚀",
            "Why did the scarecrow win an award? Because he was outstanding in his field! 🌾",
            "What do you call a bear with no teeth? A gummy bear! 🧸",
            "Why can't your nose be 12 inches long? Because then it would be a foot! 👃",
            "What's brown and sticky? A stick! 🌳",
            "Why did the golfer bring two pairs of pants? In case he got a hole in one! ⛳",
            "What's the best thing about Switzerland? I don't know, but the flag is a big plus! 🇨🇭",
            "Why don't skeletons fight each other? They don't have the guts! 💀"
        ];
        
        const jokeDisplay = document.getElementById('joke-display');
        const animationArea = document.getElementById('animation-area');
        const nextSection = document.getElementById('next-section');
        let jokeCount = 0;
        
        jokeBtn.addEventListener('click', function() {
            // Get random joke
            const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
            
            // Animate joke display
            jokeDisplay.style.animation = 'none';
            void jokeDisplay.offsetWidth;
            jokeDisplay.style.animation = 'fadeInOut 0.5s';
            
            setTimeout(() => {
                jokeDisplay.innerHTML = `<p>${randomJoke}</p>`;
            }, 250);
            
            // Create funny animation
            animationArea.innerHTML = '';
            const funnyEmoji = document.createElement('div');
            const emojis = ['🤣', '😂', '😆', '😹', '🤪'];
            funnyEmoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
            funnyEmoji.style.fontSize = '5rem';
            funnyEmoji.style.animation = 'bounce 0.5s infinite';
            animationArea.appendChild(funnyEmoji);
            
            jokeCount++;
            
            // Show next button after 3 jokes
            if (jokeCount >= 3 && nextSection) {
                nextSection.classList.remove('hidden');
            }
        });
        
        // Next button in fun page
        const funNextBtn = document.getElementById('next-btn');
        if (funNextBtn) {
            funNextBtn.addEventListener('click', function() {
                redirectToPage('apology.html');
            });
        }
    }
    
    // Next button in apology page
    if (document.querySelector('.apology-content')) {
        const apologyNextBtn = document.getElementById('next-btn');
        if (apologyNextBtn) {
            apologyNextBtn.addEventListener('click', function() {
                redirectToPage('compliments.html');
            });
        }
    }
});