const form = document.getElementById("contactForm");
const error = document.getElementById("error");

form.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        error.textContent = "All fields are required.";
        error.style.color = "#fca5a5";
        return;
    }

    error.textContent = "Message sent successfully!";
    error.style.color = "#bbf7d0";
    form.reset();
});

/* Fade-in */
const faders = document.querySelectorAll(".fade");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
    });
}, { threshold: 0.2 });

faders.forEach(el => observer.observe(el));

feather.replace();
