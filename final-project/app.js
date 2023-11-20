particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

function toggleSwitch(toggleContainer) {
  toggleContainer.classList.toggle('active');
  const circle = toggleContainer.querySelector('.toggle-circle');
}