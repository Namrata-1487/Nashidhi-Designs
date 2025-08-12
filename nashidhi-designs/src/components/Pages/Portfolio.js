import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import './Portfolio.css';

const images = [
  '/assets/mech-model1.jpg',
  '/assets/mech-model2.jpg',
  '/assets/mech-animation1.jpg',
  '/assets/mech-render1.jpg'
];

export default function Portfolio() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="portfolio-container">
      <h1>Mechanical Design Portfolio</h1>
      <p className="portfolio-subtext">
        A selection of our 3D models, animations, and renderings created from client sketches.
      </p>
      <div className="grid">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Mechanical Project ${idx + 1}`}
            onClick={() => { setIsOpen(true); setPhotoIndex(idx); }}
          />
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
        />
      )}
    </div>
  );
}
