/*
Written by Benjamin Wenger and Copilot 365 on 5-20-2026
Last revision 5-20-26
HTML code for experience page
*/

// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = this.getAttribute('href');

        // Only apply smooth scrolling for same-page anchors
        if (target.startsWith("#")) {
            e.preventDefault();
            document.querySelector(target)
                .scrollIntoView({ behavior: 'smooth' });
        }
    });
});