// Scroll Reveal
ScrollReveal().reveal('.title', {
    delay: 200,
    distance: '30px',
    origin: 'top'
});

ScrollReveal().reveal('.card, .project-card, .about-content', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    interval: 200
});

// Back to top button show/hide
const btnUp = document.querySelector('.btn-up');
window.addEventListener('scroll', () => {
    btnUp.style.display = window.scrollY > 300 ? 'flex' : 'none';
});
