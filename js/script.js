window.addEventListener('scroll', function () {
    const welcomeSection = document.querySelector('.welcome-section');
    const header = document.querySelector('header');
    const main = document.querySelector('main');

    if (window.scrollY > welcomeSection.offsetHeight / 2) {
        welcomeSection.style.display = 'none';
        header.style.display = 'block';
        main.style.display = 'block';
    } else {
        welcomeSection.style.display = 'flex';
        header.style.display = 'none';
        main.style.display = 'none';
    }
});
