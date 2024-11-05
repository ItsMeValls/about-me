let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    
    // Check if scrolling down or up
    if (window.scrollY > lastScrollY) {
        header.style.top = '-80px'; // Hide header when scrolling down
    } else {
        header.style.top = '0'; // Show header when scrolling up
    }
    
    lastScrollY = window.scrollY;
});
