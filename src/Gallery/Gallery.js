import React, { useEffect, useState } from 'react';
import './Gallery.css'
const Gallery = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        const url = '/db.json';
        fetch(url)
            .then(res => res.json())
            .then(img => setImages(img))
    }, [])
    return (
        <div className="gallery">
            {images.map((image, index) => (
                <div
                    key={image.id}
                    className={`image-container ${index === 0 ? 'featured-image' : ''}`}
                >
                    <img src={image.src} alt="" />
                </div>
            ))
            }
        </div >
    );
};

export default Gallery;