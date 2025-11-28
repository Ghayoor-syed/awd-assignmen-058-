
// hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// smooth scroll function
function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
}

// about section text toggle
function toggleMore() {
    const moreText = document.getElementById('moreText');
    moreText.style.display = moreText.style.display === 'none' ? 'block' : 'none';
}

// contact form validation
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');

    if (name && email && message) {
        formMessage.style.color = 'green';
        formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
        contactForm.reset();
    } else {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please fill in all fields.';
    }
});

// dark / light mode toggle
const modeToggle = document.getElementById('modeToggle');

modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    modeToggle.textContent =
        document.body.classList.contains('dark-mode')
            ? 'Light Mode'
            : 'Dark Mode';
});
