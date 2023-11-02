import React, { useEffect, useState } from 'react';
import './Gallery.css'
import ImageUpload from '../Image_Upload/ImageUpload';
const Gallery = () => {
    const [images, setImages] = useState([]);
    const [checkedCount, setCheckedCount] = useState(0);


    useEffect(() => {
        const url = '/db.json';
        fetch(url)
            .then(res => res.json())
            .then(img => setImages(img.map((image) => ({ ...image, selected: false }))))
    }, []);

    const toggleCheckbox = (index) => {
        const updatedImages = images.map((image, i) => {
            if (i === index) {
                image.selected = !image.selected; // Toggle the selected property
            }
            return image;
        });
        setImages(updatedImages);
        // Update the checkedCount based on the selected images
        const newCheckedCount = updatedImages.filter((image) => image.selected).length;
        setCheckedCount(newCheckedCount);
    };


    const handleImageUpload = (e) => {
        const selectedFiles = e.target.files;
        const newImages = Array.from(selectedFiles).map((file, index) => {
            const id = images.length + index + 1;
            const src = URL.createObjectURL(file);

            return { id, src }
        })
        setImages([...images, ...newImages])
    };

    const handleDeleteSelected = (index) => {
        // Remove the image from the images array based on its index
        const updatedImages = images.filter((image) => !image.selected);

        setImages(updatedImages);
        // Update the checkedCount based on the selected images

        const newCheckedCount = updatedImages.filter((image) => image.selected).length;
        setCheckedCount(newCheckedCount);
    };
    return (<div className='container'>
        <div className="gallery">



            <div className="checked-counter"><h4>{checkedCount}  Files selected</h4></div>
            <button className="delete-button" onClick={() => handleDeleteSelected()}>
                Delete Selected
            </button>

            {images?.map((image, index) => (
                <div
                    key={image.id}
                    className={`image-container ${image.selected ? 'selected' : ''} ${index === 0 ? 'featured-image' : ''}`} onClick={() => toggleCheckbox(index)}
                >
                    <input type="checkbox" className={`image-checkbox ${image.selected ? 'visible' : ''}`} checked={image.selected} />

                    <img src={image.src} alt="" />
                </div>
            ))
            }
            <div className="image-container no-hover">
                <ImageUpload onImageUpload={handleImageUpload} />
            </div>

        </div >
    </div>
    );
};

export default Gallery;