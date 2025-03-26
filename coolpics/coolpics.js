// Menu toggle functionality
const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}
menuButton.addEventListener("click", toggleMenu);

// Handle window resize
function handleResize() {
  const menu = document.querySelector(".menu");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}
handleResize();
window.addEventListener("resize", handleResize);

// Viewer template function
function viewerTemplate(pic, alt) {
  return `<div class="viewer">
    <button class="close-viewer" aria-label="Close viewer">X</button>
    <img src="${pic}" alt="${alt}">
  </div>`;
}

// View handler function
function viewHandler(event) {
  const clickedElement = event.target;
  if (clickedElement.tagName === "IMG") {
    const srcParts = clickedElement.src.split("-");
    const fullImageSrc = `${srcParts[0]}-full.jpeg`;
    const altText = clickedElement.alt;
    const modalHTML = viewerTemplate(fullImageSrc, altText);
    document.body.insertAdjacentHTML("afterbegin", modalHTML);
    const closeButton = document.querySelector(".close-viewer");
    closeButton.addEventListener("click", closeViewer);
  }
}

// Close viewer function
function closeViewer() {
  const viewer = document.querySelector(".viewer");
  if (viewer) {
    viewer.remove();
  }
}

// Add event listener to the gallery
const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewHandler);