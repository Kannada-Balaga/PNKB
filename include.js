
// include.js

document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;

      // Now that header is loaded, attach event listener
      const toggleButton = document.querySelector('.menu-toggle');
      const navMenu = document.querySelector('.nav-menu');

      if (toggleButton && navMenu) {
        toggleButton.addEventListener('click', () => {
			if (window.innerWidth < 768){
				navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
			}
        });
      }
    });
	
    
	// Hide registration iframe if current date is on or after November 1, 2025
	// Hide registration iframe and update heading if current date is on or after November 1, 2025
	const cutoffDate = new Date('2025-29-10');
	const today = new Date();
	const registrationIframe = document.querySelector('.registration-form iframe');
	const registrationHeading = document.querySelector('.registration-form h2');
	if (today >= cutoffDate) {
	  if (registrationIframe) registrationIframe.style.display = 'none';
	  if (registrationHeading) registrationHeading.textContent = 'Registration Closed';
	}


	
  fetch("footer.html")
    .then(res => res.text())
    .then(data => document.getElementById("footer").innerHTML = data);
});
