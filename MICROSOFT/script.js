const nav = document.querySelector('#mobile-nav-click');
const mobileNav = document.querySelector('#mobile-nav-links');

nav.addEventListener('click', function toggleEvent() {
    mobileNav.classList.toggle('active-nav');
});



document.addEventListener('DOMContentLoaded', function () {
    const upArrow = document.getElementById('upArrow');

    function checkScrollPosition() {
        const scrollPosition = window.scrollY || window.pageYOffset;
        const windowHeight = window.innerHeight;
        const bodyHeight = document.body.scrollHeight;

        if (scrollPosition === 0) {
            upArrow.style.display = 'none';
        } else if (scrollPosition + windowHeight >= bodyHeight) {
            upArrow.style.display = 'block';
        } else {
            upArrow.style.display = 'block';
        }
    }

    checkScrollPosition();

    window.addEventListener('scroll', checkScrollPosition);
});
