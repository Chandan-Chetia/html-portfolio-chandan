document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    // Replace these with your actual app logos
    const appLogos = [
        'ToDoList.png',
        'W1.jpg',
        'W2.jpg',
        'logo3.png',
        'logo4.png',
        'logo5.png',
        'logo6.png',
        'logo7.png',
        'logo8.png'
    ];
    
    // Create slider items
    appLogos.forEach(logo => {
        const item = document.createElement('div');
        item.className = 'slider-item';
        
        const img = document.createElement('img');
        img.src = logo;
        img.alt = 'App Logo';
        
        item.appendChild(img);
        slider.appendChild(item);
    });
    
    // Navigation buttons functionality
    prevBtn.addEventListener('click', () => {
        slider.scrollBy({
            left: -200,
            behavior: 'smooth'
        });
    });
    
    nextBtn.addEventListener('click', () => {
        slider.scrollBy({
            left: 200,
            behavior: 'smooth'
        });
    });
    
    // Touch support for mobile devices
    let isDown = false;
    let startX;
    let scrollLeft;
    
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        slider.style.cursor = 'grabbing';
        slider.style.scrollBehavior = 'auto';
    });
    
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.style.cursor = 'grab';
    });
    
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.style.cursor = 'grab';
        slider.style.scrollBehavior = 'smooth';
    });
    
    slider.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fastness
        slider.scrollLeft = scrollLeft - walk;
    });
    
    // Touch events for mobile
    slider.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        slider.style.scrollBehavior = 'auto';
    });
    
    slider.addEventListener('touchend', () => {
        isDown = false;
        slider.style.scrollBehavior = 'smooth';
    });
    
    slider.addEventListener('touchmove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });
});