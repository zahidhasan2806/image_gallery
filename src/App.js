import Gallery from './Gallery/Gallery';
import './App.css'
import { useState } from 'react';

function App() {
  const [showToast, setShowToast] = useState(false);

  const handleUploadSuccess = () => {
    setShowToast(true);

    // Auto close the toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };
  return (
    <div className="App">
      <h1>Image Gallery</h1>
      <Gallery onUploadSuccess={handleUploadSuccess} showToast={showToast} setShowToast={setShowToast} />
    </div>
  );
}

export default App;
