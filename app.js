// script.js
document.addEventListener("DOMContentLoaded", function() {
    var loader = document.getElementById('loader');
    var content = document.getElementById('content');
    
    // Simulating a delay to showcase the loader. Remove this in production.
    setTimeout(function() {
      loader.style.display = 'none';
      content.style.display = 'block';
    }, 2000); // Change this value to simulate different loading times
  });
  
  // scripts.js
