function toggleMenu() {
    document.querySelector('.header nav').classList.toggle('active');
}
window.addEventListener('scroll', function() {
    let logo = document.getElementById('logo');
    
    if (window.scrollY > 50) { // You can adjust 50 to control sensitivity
        logo.classList.add('fade');
    } else {
        logo.classList.remove('fade');
    }
});
// Show timeline items on scroll
const timelineItems = document.querySelectorAll('.timeline-item-clean');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

timelineItems.forEach(item => {
  observer.observe(item);
});
const timelineItems = document.querySelectorAll('.timeline-item-clean');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

timelineItems.forEach(item => observer.observe(item));
// Toggle mobile menu
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

