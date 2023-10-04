
window.onscroll = function() {
    const navbar = document.querySelector('#primary-header');
    if (window.pageYOffset > 100 && window.pageYOffset < 3500) {
      navbar.classList.add('scrolled');
    } 
    else {
      navbar.classList.remove('scrolled');
    }
}
