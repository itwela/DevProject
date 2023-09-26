
window.onscroll = function() {
    const navbar = document.querySelector('#primary-header');
    if (window.pageYOffset > 1500) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
}

// ----------- hide team text ---------
