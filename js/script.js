window.addEventListener('scroll', function () {
    const welcomeSection = document.querySelector('.welcome-section');
    const backgroundImage = document.querySelector('.background-image');
    const main = document.querySelector('main');
    const fadeThreshold = 50;

    if (window.scrollY > welcomeSection.offsetHeight - fadeThreshold) {
        welcomeSection.style.transition = 'opacity 0.5s, visibility 0.5s linear 0.5s';
        backgroundImage.style.transition = 'opacity 0.5s, visibility 0.5s linear 0.5s';
        welcomeSection.style.opacity = '0';
        backgroundImage.style.opacity = '0';
        welcomeSection.style.visibility = 'hidden';
        backgroundImage.style.visibility = 'hidden';
        main.style.transition = 'opacity 0.5s';
        main.style.opacity = '1';
    } else {
        welcomeSection.style.transition = 'opacity 0.5s';
        backgroundImage.style.transition = 'opacity 0.5s';
        welcomeSection.style.opacity = '1';
        backgroundImage.style.opacity = '1';
        welcomeSection.style.visibility = 'visible';
        backgroundImage.style.visibility = 'visible';
        main.style.transition = 'opacity 0.5s';
        main.style.opacity = '0';
    }
});

window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('main section');
    const sectionsP = document.querySelectorAll('main section p');

    sections.forEach(function (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionTop < screenHeight * 0.2) {
            section.classList.add('visible');
        }
    });
    sectionsP.forEach(function (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionTop < screenHeight * 0.2) {
            section.classList.add('visible');
        }
    });
})

