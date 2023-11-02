// src/ImageUpload.js

import './ImageUpload.css'

const ImageUpload = ({ onImageUpload }) => {


    return (
        <div className="uploader" >
            <input type="file" name='images' className="file-input" title='Add Images' multiple onChange={onImageUpload} />
            <div className="uploader-container">
                <img src="/placeholder.png" alt="Placeholder" id="uploaded-image" />
                <span className="uploader-title">Add Images</span>
            </div>
        </div>
    );
};

export default ImageUpload;
