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
