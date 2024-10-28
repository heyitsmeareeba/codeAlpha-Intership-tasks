let sections = document.querySelectorAll('section');
let links = document.querySelectorAll('nav a');

// Function to handle scroll and set active class
window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let secOffset = section.offsetTop - 250;
        let secHeight = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= secOffset && top < secOffset + secHeight) {
            // Remove 'active' class from all links and set it on the current link
            links.forEach(link => link.classList.remove('active'));
            document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
        }
    });
};


