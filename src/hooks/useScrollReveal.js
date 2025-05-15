// src/hooks/useScrollReveal.js
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const useScrollReveal = () => {
  useEffect(() => {
    const sr = ScrollReveal();

    // Clean up previous reveals (for hot reload during dev)
    sr.clean('.reveal-bottom, .reveal-left, .reveal-right,.reveal-child, .reveal-zoom, .reveal-fade ,.reveal-about');

    sr.reveal('.reveal-bottom', {
      origin: 'bottom',
      distance: '40px',
      duration: 800,
      viewFactor: 0.3,
      interval: 100,
    });

    sr.reveal('.reveal-left', {
      origin: 'left',
      distance: '50px',
      duration: 1000,
      delay: 100,
      viewFactor: 0.2,
    });

    sr.reveal('.reveal-right', {
      origin: 'right',
      distance: '60px',
      duration: 1000,
      delay: 200,
      viewFactor: 0.3,
    });

    sr.reveal('.reveal-about', {
      origin: 'right',
      distance: '60px',
      duration: 1000,
      delay: 200,
      viewFactor: 0.3,
    });

    sr.reveal('.reveal-zoom', {
      scale: 0.85,
      duration: 900,
      delay: 300,
      viewFactor: 0.4,
    });
    sr.reveal('.reveal-child', {
    origin: 'bottom',
    distance: '60px',
    duration: 2000,
    interval: 200, // <- Delay between each child element
    reset: false,
});

    sr.reveal('.reveal-fade', {
      opacity: 0,
      duration: 800,
      delay: 400,
      viewFactor: 0.3,
    });
  }, []);
};

export default useScrollReveal;


