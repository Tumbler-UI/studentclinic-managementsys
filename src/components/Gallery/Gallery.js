// Gallery.js
import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const images = [
    { id: 1, src: 'ev-prototype-1.jpg', caption: 'Initial prototype chassis' },
    { id: 2, src: 'ev-battery-pack.jpg', caption: 'Custom battery pack assembly' },
    { id: 3, src: 'ev-motor-test.jpg', caption: 'Motor dyno testing' },
    { id: 4, src: 'ev-workshop.jpg', caption: 'Development team at work' },
    { id: 5, src: 'ev-aero-test.jpg', caption: 'Wind tunnel testing' },
    { id: 6, src: 'ev-interior.jpg', caption: 'Interior mockup' }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="gallery-section">
      <h2>Development Gallery</h2>
      <div className="gallery-grid">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="gallery-item"
            onClick={() => openModal(image)}
          >
            <img 
              src={`/images/gallery/${image.src}`} 
              alt={image.caption} 
            />
            <div className="gallery-caption">{image.caption}</div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img 
              src={`/images/gallery/${selectedImage.src}`} 
              alt={selectedImage.caption} 
            />
            <div className="modal-caption">{selectedImage.caption}</div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;