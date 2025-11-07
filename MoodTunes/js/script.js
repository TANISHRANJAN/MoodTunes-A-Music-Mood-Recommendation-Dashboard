// Add interactive features when document is ready
document.addEventListener('DOMContentLoaded', function() {
    // Add hover animation class to mood cards
    const moodCards = document.querySelectorAll('.mood-card');
    
    moodCards.forEach(card => {
        // Add mousemove effect for card tilt
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        // Reset card position on mouse leave
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
        
        // Add pulse animation on hover
        card.addEventListener('mouseenter', () => {
            card.classList.add('animate__pulse');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('animate__pulse');
        });
    });
});