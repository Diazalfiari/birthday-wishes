// Global Variables
let candlesBlown = 0;
let musicPlaying = false;
let celebrationStarted = false;

// Loading Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        createBackgroundEffects();
        startAgeCounter();
    }, 3000);
});

// Background Effects
function createBackgroundEffects() {
    createSparkles();
    createFloatingHearts();
    setInterval(createSparkles, 5000);
    setInterval(createFloatingHearts, 3000);
}

function createSparkles() {
    const container = document.querySelector('.sparkles-container');
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animationDelay = Math.random() * 1.5 + 's';
            container.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 1500);
        }, i * 100);
    }
}

function createFloatingHearts() {
    const container = document.querySelector('.hearts-container');
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '💖';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 3 + 's';
            container.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, i * 600);
    }
}

function createConfetti() {
    const container = document.querySelector('.confetti-container');
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDelay = Math.random() * 3 + 's';
            container.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }, i * 50);
    }
}

// Start Celebration
function startCelebration() {
    if (!celebrationStarted) {
        celebrationStarted = true;
        document.body.classList.add('celebration-active');
        createConfetti();
        createMassiveSparkles();
        showSuccessMessage();
        
        // Auto scroll to next section
        setTimeout(() => {
            document.querySelector('.age-section').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }, 2000);
    }
}

function createMassiveSparkles() {
    const container = document.querySelector('.sparkles-container');
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animationDelay = Math.random() * 2 + 's';
            sparkle.style.background = getRandomColor();
            container.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 2000);
        }, i * 20);
    }
}

function getRandomColor() {
    const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#a8e6cf', '#ff8b94', '#87ceeb'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function showSuccessMessage() {
    const message = document.createElement('div');
    message.id = 'success-message';
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
        color: white;
        padding: 25px 50px;
        border-radius: 50px;
        font-size: 2rem;
        font-weight: bold;
        z-index: 15000;
        box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        backdrop-filter: blur(10px);
        border: 3px solid rgba(255,255,255,0.3);
        text-align: center;
        animation: successBounce 0.8s ease-out;
        min-width: 400px;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    `;
    message.innerHTML = '🎉 Selamat Ulang Tahun Sayang! 🎉';
    document.body.appendChild(message);
    
    // Create overlay background
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.3);
        z-index: 14999;
        animation: fadeIn 0.3s ease-out;
    `;
    document.body.appendChild(overlay);
    
    setTimeout(() => {
        message.style.animation = 'successFadeOut 0.5s ease-in forwards';
        overlay.style.animation = 'fadeOut 0.5s ease-in forwards';
        setTimeout(() => {
            message.remove();
            overlay.remove();
        }, 500);
    }, 3000);
}

// Age Counter
function startAgeCounter() {
    const birthDate = new Date('2004-08-24T00:00:00');
    
    function updateAge() {
        const now = new Date();
        const ageInMs = now - birthDate;
        
        const years = Math.floor(ageInMs / (1000 * 60 * 60 * 24 * 365.25));
        const days = Math.floor((ageInMs % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((ageInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((ageInMs % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((ageInMs % (1000 * 60)) / 1000);
        
        document.getElementById('years').textContent = years;
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }
    
    updateAge();
    setInterval(updateAge, 1000);
}

// Memory Gallery
function openMemoryModal(memoryId) {
    const modal = document.getElementById('memory-modal');
    const modalBody = document.getElementById('modal-body');
    
    const memories = {
        1: {
            title: "Kenangan Pertama Kita 💕",
            content: `
                <div style="text-align: center; color: white;">
                    <div style="font-size: 5rem; margin-bottom: 20px;">📸</div>
                    <h3 style="color: #ff6b6b; margin-bottom: 20px;">Pertama Kali Bertemu</h3>
                    <p style="font-size: 1.2rem; line-height: 1.6;">
                        Masih ingat saat pertama kali kita bertemu? Saat itu aku sudah tahu bahwa kamu adalah orang yang istimewa. 
                        Senyumanmu yang manis membuat hariku langsung cerah. 
                        Dari pertemuan pertama itu, aku tahu bahwa hidupku akan berubah menjadi lebih indah.
                    </p>
                </div>
            `
        },
        2: {
            title: "Momen Spesial Bersama 🌟",
            content: `
                <div style="text-align: center; color: white;">
                    <div style="font-size: 5rem; margin-bottom: 20px;">🌟</div>
                    <h3 style="color: #4ecdc4; margin-bottom: 20px;">Kencan Pertama</h3>
                    <p style="font-size: 1.2rem; line-height: 1.6;">
                        Kencan pertama kita di tempat itu masih membekas di hatiku. 
                        Kita mengobrol berjam-jam sampai lupa waktu, dan aku merasa seperti sudah mengenalmu seumur hidup. 
                        Hari itu adalah awal dari perjalanan indah kita berdua.
                    </p>
                </div>
            `
        },
        3: {
            title: "Hadiah Terindah 💝",
            content: `
                <div style="text-align: center; color: white;">
                    <div style="font-size: 5rem; margin-bottom: 20px;">💝</div>
                    <h3 style="color: #ffe66d; margin-bottom: 20px;">Cinta Sejati</h3>
                    <p style="font-size: 1.2rem; line-height: 1.6;">
                        Hadiah terindah yang pernah aku terima adalah cintamu. 
                        Tidak ada yang bisa menggantikan kebahagiaan yang kamu berikan setiap hari. 
                        Kamu adalah hadiah terindah dari Tuhan untuk hidupku.
                    </p>
                </div>
            `
        },
        4: {
            title: "Hari Romantis Kita 🌹",
            content: `
                <div style="text-align: center; color: white;">
                    <div style="font-size: 5rem; margin-bottom: 20px;">🌹</div>
                    <h3 style="color: #ff8b94; margin-bottom: 20px;">Valentine Terindah</h3>
                    <p style="font-size: 1.2rem; line-height: 1.6;">
                        Setiap hari bersamamu terasa seperti Valentine. 
                        Tapi hari Valentine yang kita rayakan bersama tahun lalu sungguh tak terlupakan. 
                        Bunga mawar, cokelat, dan yang terpenting, senyumanmu yang membuatku jatuh cinta lagi dan lagi.
                    </p>
                </div>
            `
        }
    };
    
    modalBody.innerHTML = memories[memoryId].content;
    modal.style.display = 'block';
    
    // Add entrance animation
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.animation = 'modalSlideIn 0.5s ease-out';
}

function closeModal() {
    const modal = document.getElementById('memory-modal');
    const modalContent = modal.querySelector('.modal-content');
    
    modalContent.style.animation = 'slideOutUp 0.3s ease-in forwards';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Love Letter
let originalLetterContent = null; // Store original content
let isTyping = false; // Prevent multiple typewriter effects

function openLetter() {
    // Prevent opening if already typing
    if (isTyping) return;
    
    const modal = document.getElementById('letter-modal');
    const letterText = modal.querySelector('.letter-text');
    
    // Store original content only once
    if (!originalLetterContent) {
        originalLetterContent = letterText.innerHTML;
    }
    
    // Reset to original content and clear for typewriter effect
    letterText.innerHTML = '';
    modal.style.display = 'block';
    isTyping = true;
    
    let i = 0;
    const speed = 30; // Slightly faster typing
    let currentChar = '';
    
    function typeWriter() {
        if (i < originalLetterContent.length) {
            currentChar = originalLetterContent.charAt(i);
            
            // Handle HTML tags - add them instantly without typing effect
            if (currentChar === '<') {
                let tagEnd = originalLetterContent.indexOf('>', i);
                if (tagEnd !== -1) {
                    letterText.innerHTML += originalLetterContent.substring(i, tagEnd + 1);
                    i = tagEnd + 1;
                } else {
                    letterText.innerHTML += currentChar;
                    i++;
                }
            } else {
                letterText.innerHTML += currentChar;
                i++;
            }
            
            setTimeout(typeWriter, speed);
        } else {
            // Typing finished
            isTyping = false;
        }
    }
    
    // Start typewriter effect after modal is fully shown
    setTimeout(typeWriter, 300);
}

function closeLetterModal() {
    const modal = document.getElementById('letter-modal');
    const modalContent = modal.querySelector('.modal-content');
    const letterText = modal.querySelector('.letter-text');
    
    // Stop any ongoing typing effect
    isTyping = false;
    
    modalContent.style.animation = 'slideOutUp 0.3s ease-in forwards';
    setTimeout(() => {
        modal.style.display = 'none';
        // Reset content to original state when modal is closed
        if (originalLetterContent) {
            letterText.innerHTML = originalLetterContent;
        }
        // Remove any inline styles that might interfere
        modalContent.style.animation = '';
    }, 300);
}

// Cake and Candles
function blowCandle(candleNumber) {
    const candle = document.querySelector(`.candle-${candleNumber}`);
    
    if (!candle.classList.contains('blown-out')) {
        candle.classList.add('blown-out');
        candlesBlown++;
        
        // Create blow effect
        createBlowEffect(candle);
        
        // Play blow sound effect (visual feedback)
        showBlowMessage(candleNumber);
        
        if (candlesBlown === 3) {
            setTimeout(() => {
                showWishMessage();
                createCakeConfetti();
            }, 1000);
        }
    }
}

function createBlowEffect(candle) {
    const rect = candle.getBoundingClientRect();
    
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            left: ${rect.left + rect.width/2}px;
            top: ${rect.top}px;
            width: 4px;
            height: 4px;
            background: #87ceeb;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            animation: blowParticle 1s ease-out forwards;
        `;
        
        particle.style.setProperty('--random-x', (Math.random() - 0.5) * 100 + 'px');
        particle.style.setProperty('--random-y', -(Math.random() * 50 + 20) + 'px');
        
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 1000);
    }
}

function showBlowMessage(candleNumber) {
    const messages = [
        '', // index 0 tidak digunakan
        '💨 Lilin pertama padam! Satu harapan terkabul!',
        '💨 Lilin kedua padam! Dua harapan terkabul!',
        '💨 Semua lilin padam! Semua harapan akan terwujud! ✨'
    ];
    
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(255,107,107,0.9);
        color: white;
        padding: 15px 30px;
        border-radius: 25px;
        font-size: 1.1rem;
        font-weight: bold;
        z-index: 10001;
        animation: slideInDown 0.5s ease-out;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    `;
    message.innerHTML = messages[candleNumber];
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.animation = 'fadeOut 0.5s ease-in forwards';
        setTimeout(() => message.remove(), 500);
    }, 2000);
}

function showWishMessage() {
    document.getElementById('wish-message').style.display = 'block';
    document.getElementById('wish-message').style.animation = 'bounceIn 0.8s ease-out';
}

function createCakeConfetti() {
    const container = document.querySelector('.confetti-container');
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: absolute;
                left: ${Math.random() * 100}%;
                top: -10px;
                width: 8px;
                height: 8px;
                background: ${getRandomColor()};
                animation: confetti-fall 2s linear infinite;
                border-radius: 50%;
            `;
            container.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 2000);
        }, i * 100);
    }
}

// Wishes
function showWish(wishNumber) {
    const wishes = {
        1: "Semoga kebahagiaan selalu menyelimuti hari-harimu, Davina! Semoga senyumanmu tak pernah pudar dan tawa riang selalu mengiringi langkahmu. Kamu layak mendapatkan semua kebahagiaan di dunia ini! 😊✨",
        2: "Semoga kesehatan selalu menjaga tubuhmu, Davina! Semoga kamu selalu kuat, sehat, dan penuh energi untuk mengejar semua impianmu. Kesehatan adalah harta yang paling berharga! 💪❤️",
        3: "Semoga semua cita-cita dan impianmu terwujud, Davina! Semoga kariermu cemerlang, studimu lancar, dan semua yang kamu rencanakan berjalan dengan baik. Kamu pasti bisa meraih semua yang kamu inginkan! 🎓🌟",
        4: "Semoga semua impian terindahmu menjadi kenyataan, Davina! Semoga langit selalu cerah untukmu dan pelangi selalu muncul setelah hujan. Percayalah, masa depan yang indah menantimu! 🌈💫"
    };
    
    const display = document.getElementById('wish-display');
    display.innerHTML = `<p>${wishes[wishNumber]}</p>`;
    display.classList.add('active');
    
    // Remove active class after animation
    setTimeout(() => {
        display.classList.remove('active');
    }, 3000);
}

// Music Player
function toggleMusic() {
    const audio = document.getElementById('birthday-song');
    const button = document.getElementById('music-toggle');
    
    if (musicPlaying) {
        audio.pause();
        button.classList.remove('playing');
        button.innerHTML = '<i class="fas fa-music"></i>';
        musicPlaying = false;
    } else {
        // Since we can't use actual audio files, we'll create a visual music effect
        button.classList.add('playing');
        button.innerHTML = '<i class="fas fa-pause"></i>';
        musicPlaying = true;
        createMusicVisualizer();
    }
}

function createMusicVisualizer() {
    if (!musicPlaying) return;
    
    const visualizer = document.createElement('div');
    visualizer.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        display: flex;
        gap: 3px;
        z-index: 999;
    `;
    
    for (let i = 0; i < 5; i++) {
        const bar = document.createElement('div');
        bar.style.cssText = `
            width: 4px;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
            border-radius: 2px;
            animation: musicBar 0.5s ease-in-out infinite alternate;
            animation-delay: ${i * 0.1}s;
        `;
        visualizer.appendChild(bar);
    }
    
    document.body.appendChild(visualizer);
    
    setTimeout(() => {
        if (visualizer.parentNode) {
            visualizer.remove();
        }
        if (musicPlaying) {
            createMusicVisualizer();
        }
    }, 3000);
}

// Modal Close on Outside Click
window.onclick = function(event) {
    const memoryModal = document.getElementById('memory-modal');
    const letterModal = document.getElementById('letter-modal');
    
    if (event.target === memoryModal) {
        closeModal();
    }
    if (event.target === letterModal) {
        closeLetterModal();
    }
}

// Keyboard Navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
        closeLetterModal();
    }
});

// Add additional CSS animations via JavaScript
const additionalStyles = `
    @keyframes slideInDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    
    @keyframes slideOutUp {
        from {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        to {
            opacity: 0;
            transform: translateY(-50px) scale(0.8);
        }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes successBounce {
        0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.3) rotate(-10deg);
        }
        30% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.2) rotate(5deg);
        }
        50% {
            transform: translate(-50%, -50%) scale(0.9) rotate(-2deg);
        }
        70% {
            transform: translate(-50%, -50%) scale(1.1) rotate(1deg);
        }
        100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
        }
    }
    
    @keyframes successFadeOut {
        0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
    }
    
    @keyframes blowParticle {
        0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(var(--random-x), var(--random-y)) scale(0);
        }
    }
    
    @keyframes musicBar {
        0% { height: 10px; }
        100% { height: 30px; }
    }
    
    @keyframes countdownPulse {
        0%, 100% { 
            transform: translateX(-50%) scale(1);
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        50% { 
            transform: translateX(-50%) scale(1.05);
            box-shadow: 0 15px 40px rgba(0,0,0,0.4);
        }
    }
    
    @keyframes slideInFromTop {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-100px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    
    @keyframes slideOutToTop {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(-100px);
        }
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Auto-play background animations
setInterval(() => {
    if (celebrationStarted) {
        createSparkles();
    }
}, 10000);

// Birthday countdown (if not birthday yet)
function checkBirthdayCountdown() {
    const today = new Date();
    const thisYearBirthday = new Date(today.getFullYear(), 7, 24); // August 24
    
    if (today > thisYearBirthday) {
        thisYearBirthday.setFullYear(today.getFullYear() + 1);
    }
    
    const timeDiff = thisYearBirthday - today;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    
    if (daysLeft > 0 && daysLeft <= 7) {
        setTimeout(() => {
            const countdownMessage = document.createElement('div');
            countdownMessage.id = 'countdown-message';
            countdownMessage.style.cssText = `
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: linear-gradient(45deg, rgba(255,107,107,0.95), rgba(78,205,196,0.95));
                color: white;
                padding: 20px 40px;
                border-radius: 50px;
                font-size: 1.2rem;
                font-weight: bold;
                z-index: 10000;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                backdrop-filter: blur(10px);
                border: 2px solid rgba(255,255,255,0.2);
                animation: countdownPulse 2s ease-in-out infinite, slideInFromTop 0.8s ease-out;
                text-align: center;
                min-width: 300px;
            `;
            countdownMessage.innerHTML = `🎂 ${daysLeft} hari lagi menuju ulang tahun Davina! 🎉`;
            
            // Add close button
            const closeBtn = document.createElement('span');
            closeBtn.innerHTML = '×';
            closeBtn.style.cssText = `
                position: absolute;
                top: 5px;
                right: 15px;
                font-size: 1.5rem;
                cursor: pointer;
                opacity: 0.7;
                transition: opacity 0.3s ease;
            `;
            closeBtn.onclick = () => countdownMessage.remove();
            closeBtn.onmouseover = () => closeBtn.style.opacity = '1';
            closeBtn.onmouseout = () => closeBtn.style.opacity = '0.7';
            
            countdownMessage.appendChild(closeBtn);
            document.body.appendChild(countdownMessage);
            
            // Auto remove after 10 seconds
            setTimeout(() => {
                if (countdownMessage.parentNode) {
                    countdownMessage.style.animation = 'slideOutToTop 0.5s ease-in forwards';
                    setTimeout(() => countdownMessage.remove(), 500);
                }
            }, 10000);
        }, 5000);
    }
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    checkBirthdayCountdown();
    
    // Add smooth scrolling to all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.6s ease-out';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, (index + 1) * 200);
    });
});

// Surprise birthday message based on actual date
function checkIfBirthday() {
    const today = new Date();
    const month = today.getMonth() + 1; // JavaScript months are 0-indexed
    const day = today.getDate();
    
    if (month === 8 && day === 24) {
        setTimeout(() => {
            const birthdayAlert = document.createElement('div');
            birthdayAlert.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 20000;
                animation: fadeIn 1s ease-out;
            `;
            
            birthdayAlert.innerHTML = `
                <div style="
                    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
                    padding: 50px;
                    border-radius: 30px;
                    text-align: center;
                    color: white;
                    font-size: 2rem;
                    font-weight: bold;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.5);
                    animation: bounceIn 1s ease-out;
                ">
                    🎉 SELAMAT ULANG TAHUN! 🎉<br>
                    <span style="font-size: 3rem;">DAVINA PUTRI KUSUMA</span><br>
                    Hari ini adalah hari istimewamu!<br>
                    <button onclick="this.parentElement.parentElement.remove()" style="
                        background: white;
                        color: #ff6b6b;
                        border: none;
                        padding: 15px 30px;
                        border-radius: 25px;
                        font-size: 1.2rem;
                        font-weight: bold;
                        margin-top: 20px;
                        cursor: pointer;
                    ">Terima Kasih! 💕</button>
                </div>
            `;
            
            document.body.appendChild(birthdayAlert);
        }, 2000);
    }
}

// Check if today is birthday
checkIfBirthday();
