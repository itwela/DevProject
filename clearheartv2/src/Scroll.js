
window.onscroll = function() {
    const navbar = document.querySelector('#primary-header');
    if (window.pageYOffset > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
}