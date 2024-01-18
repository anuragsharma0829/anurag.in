const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.querySelector('.hidden.md\\:block');

// Add a click event listener to the toggle button
mobileMenuToggle.addEventListener('click', function () {
  // Toggle the 'hidden' class on the mobile menu
  mobileMenu.classList.toggle('hidden');
});