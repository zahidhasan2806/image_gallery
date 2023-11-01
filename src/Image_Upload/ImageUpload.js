// src/ImageUpload.js
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './ImageUpload.css'

const ImageUpload = ({ onImageUpload }) => {
    const onDrop = useCallback((acceptedFiles) => {
        // Process and handle the uploaded images here
        onImageUpload(acceptedFiles);
    }, [onImageUpload]);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/*', // Allow only image files
    });

    return (
        <div {...getRootProps()} className="image-upload">
            <input {...getInputProps()} />
            <p>Add Images</p>
        </div>
    );
};

export default ImageUpload;
