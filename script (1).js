// Welcome message with your name
document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  if (intro) {
    intro.textContent = "Hi, I'm Prashant Patil — a passionate developer!";
  }

  // Add typing effect (optional)
  const typedText = "Building cool stuff with code.";
  let index = 0;

  const typingElement = document.getElementById("typing");

  function typeWriter() {
    if (index < typedText.length) {
      typingElement.textContent += typedText.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }

  if (typingElement) {
    typeWriter();
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});