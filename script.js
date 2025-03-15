// Nav link active toggling
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(nav => nav.classList.remove('active'));
    this.classList.add('active');
  });
});

// Flip card functionality for project cards
const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach(card => {
  card.addEventListener('click', function(e) {
    // Prevent flipping when the GitHub button is clicked
    if (e.target.tagName.toLowerCase() === 'a') return;
    card.classList.toggle('flipped');
  });
});
