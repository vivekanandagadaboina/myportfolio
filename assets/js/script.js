
function showSection(sectionId) {
  const sections = document.querySelectorAll('main section');
  sections.forEach((sec) => {
    sec.style.display = "none";
  });
  document.getElementById(sectionId).style.display = "block";
}
function showSection(sectionId) {
  const sections = document.querySelectorAll('main section');
  sections.forEach((sec) => {
    sec.style.display = "none";
  });
  document.getElementById(sectionId).style.display = "block";

  // Reinitialize particles and typing only for home
  if (sectionId === 'home') {
    particlesJS.load('particles-js', 'assets/js/particles.json', function() {
      console.log('Particles loaded');
    });
    const typed = new Typed('.typing', {
      strings: ["Web Developer", "AI/ML Enthusiast", "Python Developer", "Coder"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });
  }
}


document.addEventListener('DOMContentLoaded', function () {
  particlesJS.load('particles-js', 'assets/js/particles.json', function () {
    console.log('Particles loaded');
  });

  const typed = new Typed('.typing', {
    strings: ["Full Stack Web Developer", "AI/ML Enthusiast", "Python Developer", "Coder"],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true
  });
});
