/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
  $(document).ready(function() {
    $('.project-title').click(function() {
      $(this).siblings('.project-images').slideToggle();
    })
  });

//detect if user is in dark-mode
const isDarkMode = () => {
 window.matchMedia('(prefers-color-scheme: dark)').matches;
}
const projectCards = document.querySelectorAll('.project-card');

// Create an Intersection Observer instance
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.5 // Adjust the threshold as needed
});

// Observe each project card
projectCards.forEach((card, index) => {
  observer.observe(card);
  card.style.transitionDelay = `${index * 0.2}s`; // Adjust the delay duration as needed
});