// Select all navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Loop through links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default action

        const sectionId = e.target.getAttribute('href');
        const sectionPosition = document.querySelector(sectionId).offsetTop;

        // Scroll to the section smoothly
        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth'
        });
    });
});
