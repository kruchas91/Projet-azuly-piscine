import React, { useState } from 'react';
import '../styles/Galerie.css';
import Photojardin1 from '../assets/Photojardin1.jpg';
import Photojardin2 from '../assets/Photojardin2.jpg';
import Photojardin3 from '../assets/Photojardin3.jpg';
import Photojardin4 from '../assets/Photojardin4.jpg';
import Photojardin5 from '../assets/Photojardin5.jpg';
import Photojardin6 from '../assets/Photojardin6.jpg';

const images = [
  Photojardin1,
  Photojardin2,
  Photojardin3,
  Photojardin4,
  Photojardin5,
  Photojardin6,
];

function GalerieJardin() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="galerie-jardin-full">
      <button className="galerie-arrow left" onClick={prevSlide} aria-label="Précédent">&#8592;</button>
      <div className="galerie-jardin-track">
        <img
          src={images[index]}
          alt={`jardin-${index + 1}`}
          className="galerie-img"
        />
      </div>
      <button className="galerie-arrow right" onClick={nextSlide} aria-label="Suivant">&#8594;</button>
    </div>
  );
}

export default GalerieJardin;