document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for anchor links (fallback if CSS scroll-behavior isn't supported)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const section = document.querySelector(targetId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
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
  
    // Set up the IntersectionObserver for reveal animations
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
  
    // Observe static feature cards (e.g., the "How to Play" cards in about.html)
    document.querySelectorAll(".feature-card").forEach(card => {
      observer.observe(card);
    });
  
    // Dynamic Feature Rendering (for pages that include an element with id="featureList")
    const features = [
      { title: "Smart Quizzes", icon: "🧠", description: "Challenge your brain with AI-powered question sets.", enabled: true },
      { title: "Missions", icon: "🎯", description: "Complete study missions and earn rewards as you progress.", enabled: true },
      { title: "Leaderboards", icon: "🏆", description: "Compete with classmates and climb the ranks.", enabled: false }, // not shown
      { title: "Progress Tracking", icon: "📈", description: "Visualize your learning with stats and achievements.", enabled: true }
    ];
  
    const featureList = document.getElementById("featureList");
    if (featureList) {
      features
        .filter(feature => feature.enabled)
        .forEach(feature => {
          const card = document.createElement("div");
          card.classList.add("feature-card");
          card.innerHTML = `
            <h3>${feature.icon} ${feature.title}</h3>
            <p>${feature.description}</p>
          `;
          featureList.appendChild(card);
          // Immediately observe the newly created dynamic card
          observer.observe(card);
        });
    }
  });
  
  