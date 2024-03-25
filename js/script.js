window.addEventListener('scroll', function () {
    const welcomeSection = document.querySelector('.welcome-section');
    const main = document.querySelector('main');

    if (window.scrollY > 0) {
        welcomeSection.style.display = 'hidden';
        main.style.display = 'visible';
    } else {
        welcomeSection.style.display = 'visible';
        main.style.display = 'hidden';
    }
});

