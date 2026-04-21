// Hide loader
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 1000);
    }, 1500);
});

// Start party
function startParty() {
    const envelope = document.querySelector('.envelope');
    envelope.classList.add('open');
    
    setTimeout(() => {
        const startScreen = document.getElementById('startScreen');
        startScreen.style.opacity = '0';
        startScreen.style.transform = 'scale(1.2)';
        
        setTimeout(() => {
            startScreen.style.display = 'none';
            document.getElementById('mainContent').style.display = 'block';
            
            const music = document.getElementById('bgMusic');
            music.volume = 0.5;
            music.play().catch(() => console.log('Music autoplay blocked'));
            
            createFloatingHearts();
            burstConfetti();
            typeMessage();
        }, 1000);
    }, 800);
}

// Music toggle
function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const icon = document.getElementById('musicIcon');
    if (music.paused) {
        music.play();
        icon.textContent = '🎵';
    } else {
        music.pause();
        icon.textContent = '🔇';
    }
}

// Floating emojis
function createFloatingHearts() {
    const container = document.getElementById('heartsBg');
    const items = ['🎈', '🎉', '✨', '🎊', '⭐', '🌟', '🎁'];
    
    setInterval(() => {
        const item = document.createElement('div');
        item.classList.add('float-heart');
        item.textContent = items[Math.floor(Math.random() * items.length)];
        item.style.left = Math.random() * 100 + 'vw';
        item.style.animationDuration = (Math.random() * 5 + 5) + 's';
        item.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
        container.appendChild(item);
        setTimeout(() => item.remove(), 10000);
    }, 400);
}

// Confetti burst
function burstConfetti() {
    const colors = ['#e91e63', '#f06292', '#f48fb1', '#ba68c8', '#ffd700', '#ff4081'];
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 4000);
        }, i * 30);
    }
}

// Typewriter message
function typeMessage() {
    const message = `Happy Birthday! 🎉
Aap sach mein ek bahut hi special aur achhi insaan hain. Aapki personality mein ek alag hi positivity hai jo har cheez ko aur bhi accha bana deti hai. Aapse baat karna aur aapke saath time spend karna hamesha accha lagta hai—pata hi nahi chalta kab waqt nikal jaata hai.
Sach kahu toh aapki simplicity aur nature hi aapko sabse alag banati hai. Aap jaise hain, waise hi hamesha rahiye, kyunki wahi aapki sabse badi strength hai.
Bhagwan kare aap hamesha khush rahen, life mein bahut aage badhen aur jo bhi aap chahen wo sab aapko mile. Aapki har ek wish poori ho aur aap hamesha aise hi muskurati rahen.
Once again, Happy Birthday! 🎂✨
Stay happy, stay blessed 😊💫`;
    
    const el = document.getElementById('typewriter');
    let i = 0;
    el.textContent = '';
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !el.dataset.typed) {
                el.dataset.typed = 'true';
                const interval = setInterval(() => {
                    if (i < message.length) {
                        el.textContent += message.charAt(i);
                        i++;
                    } else {
                        clearInterval(interval);
                    }
                }, 30);
            }
        });
    });
    observer.observe(el);
}

// Blow candle
document.addEventListener('DOMContentLoaded', () => {
    const candle = document.querySelector('.candle');
    if (candle) {
        candle.addEventListener('click', () => {
            const flame = document.getElementById('flame');
            flame.classList.add('blown');
            document.getElementById('blowHint').textContent = '🌟 Wish granted! Happy Birthday! 🌟';
            burstConfetti();
            
            setTimeout(() => {
                flame.classList.remove('blown');
                document.getElementById('blowHint').textContent = '🎤 Click candle again to wish more!';
            }, 4000);
        });
    }
});
