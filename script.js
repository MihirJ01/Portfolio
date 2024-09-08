document.addEventListener('DOMContentLoaded', function() {
    // Header background color change on scroll
    window.addEventListener('scroll', function() {
      const header = document.querySelector('header');
      
      if (header) {
        if (window.scrollY > 50) {
          header.style.backgroundColor = '#000'; // Set header background color on scroll
        } 
      }
    });
  
    // Smooth scroll for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Typing effect for changing text
    const changingText = document.getElementById('dynamic-part'); // Ensure this ID matches your HTML
    const textOptions = [
      'Game Developer"',
      'Game Designer"',
      'Digital Artist"',
      'Content Creator"'
    ];
    let currentIndex = 0;
    let currentText = '';
    let isDeleting = false;
    let timer = 100;
  
    function typeEffect() {
      const fullText = textOptions[currentIndex];
  
      if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
        timer = 50; // Faster when deleting
      } else {
        currentText = fullText.substring(0, currentText.length + 1);
        timer = 100; // Normal speed when typing
      }
  
      if (changingText) {
        changingText.textContent = currentText;
      }
  
      if (!isDeleting && currentText === fullText) {
        timer = 2000; // Pause at the end
        isDeleting = true;
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % textOptions.length;
        timer = 100;
      }
  
      setTimeout(typeEffect, timer);
    }
  
    typeEffect();
  
    // Adjust scroll behavior for the "View My Work" button
    const viewMyWorkButton = document.getElementById('view-my-work'); // Ensure this ID matches your HTML
    const projectsSection = document.getElementById('projects'); // Ensure this ID matches your HTML
  
    if (viewMyWorkButton && projectsSection) {
      viewMyWorkButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Adjust scroll behavior
        window.scrollTo({
          top: projectsSection.offsetTop - 50, // Adjust the offset as needed
          behavior: 'smooth'
        });
      });
    }
  });
  
