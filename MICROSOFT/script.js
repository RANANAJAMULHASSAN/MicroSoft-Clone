document.addEventListener('DOMContentLoaded', function () {
    const upArrow = document.getElementById('upArrow');

    // Function to check scroll position and show/hide the SVG arrow
    function checkScrollPosition() {
        const scrollPosition = window.scrollY || window.pageYOffset;
        const windowHeight = window.innerHeight;
        const bodyHeight = document.body.scrollHeight;

        // Check if the user is at the top of the page
        if (scrollPosition === 0) {
            // User is at the top of the page, hide the SVG arrow
            upArrow.style.display = 'none';
        } else if (scrollPosition + windowHeight >= bodyHeight) {
            // User is near or at the bottom of the page, hide the SVG arrow
            upArrow.style.display = 'block';
        } else {
            // User is neither at the top nor the bottom, show the SVG arrow
            upArrow.style.display = 'block';
        }
    }

    // Check scroll position on page load
    checkScrollPosition();

    // Add a scroll event listener to check scroll position dynamically
    window.addEventListener('scroll', checkScrollPosition);
});

