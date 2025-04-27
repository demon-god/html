// Intersection Observer for Animation Trigger
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

// Observe sections for fade-in and slide-in animations
const faders = document.querySelectorAll('.fade-in');
faders.forEach(fader => observer.observe(fader));

const projects = document.querySelectorAll('.project');
projects.forEach(project => observer.observe(project));

const contact = document.querySelector('#contact');
observer.observe(contact);

const footer = document.querySelector('footer');
observer.observe(footer);

// Hero section animation on page load
const hero = document.querySelector('.hero');
window.addEventListener('load', () => {
    hero.classList.add('visible');
});
