// Smooth scroll for anchor links (in case scroll-behavior CSS isn't supported)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Change navbar background when scrolling
window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

// Scroll reveal animation for feature cards
const featureCards = document.querySelectorAll(".feature-card");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    { threshold: 0.3 }
);

featureCards.forEach((card) => observer.observe(card));

// Example: Display top features dynamically using objects & array methods

const features = [
    { title: "Smart Quizzes", icon: "🧠", enabled: true },
    { title: "Missions", icon: "🎯", enabled: true },
    { title: "Leaderboards", icon: "🏆", enabled: false }, // disabled feature
];

// Filter enabled features and log their names
features
  .filter(feature => feature.enabled)
  .map(feature => `${feature.icon} ${feature.title}`)
  .forEach(item => console.log("Available Feature:", item));
