
import '../styles/Galerie.css';
import React, { useState } from 'react';

const images = [
  require('../assets/Background1.jpg'),
  require('../assets/Background2.jpg'),
  require('../assets/Background3.jpg'),
];

function Galerie() {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <div className="galerie-jardin-full">
      <button className="galerie-arrow left" onClick={prevSlide} aria-label="Précédent">&#8592;</button>
      <div className="galerie-jardin-track">
        <img
          src={images[current]}
          alt={`slide-${current + 1}`}
          className="galerie-img"
        />
      </div>
      <button className="galerie-arrow right" onClick={nextSlide} aria-label="Suivant">&#8594;</button>
    </div>
  );
}

export default Galerie;