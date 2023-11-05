// ImageUpload Component: Allows users to select and upload images.
import './ImageUpload.css'

const ImageUpload = ({ onImageUpload }) => {


    return (
        <div className="uploader" >
            {/* File input for image selection */}
            <label htmlFor="imageInput" className="file-input-label">
                <input type="file" id="imageInput" name='images' className="file-input" title='Add Images' multiple onChange={onImageUpload} />
                <div className="uploader-container">
                    {/* Initially, a placeholder image */}
                    <img src="/placeholder.png" alt="Placeholder" id="uploaded-image" />
                    <span className="uploader-title">Add Images</span>
                </div>
            </label>
        </div>
    );
};

export default ImageUpload;
