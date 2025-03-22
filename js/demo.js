/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

// This can be used to set the Particles Effects. Check README for more details!
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });

  var intro = document.getElementById('intro');
  intro.style.marginTop = -intro.offsetHeight / 2 + 'px';

  // Initialize Typed.js for Name
  var typedName = new Typed('#typed-name', {
    strings: ["Przemysław Pakuła"],
    typeSpeed: 100,
    showCursor: false,
    onComplete: function() {  // This will run after the name finishes typing
      // Initialize Typed.js for Position (Title) after name finishes typing
      new Typed('#typed-title', {
        strings: ["ICT Engineer"],
        typeSpeed: 100,
        startDelay: 500, // Optional: You can adjust the delay before starting typing position
        showCursor: false
      });
    }
  });
}, false);
