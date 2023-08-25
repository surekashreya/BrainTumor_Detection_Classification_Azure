import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

const CustomVision = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [imageUrl, setImageUrl] = useState('');

  const handleImageUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedImage);

    // Make API request to Custom Vision for prediction
    axios.post('https://shivani-cgs.cognitiveservices.azure.com/customvision/v3.0/Prediction/4c309cc8-7cc1-477e-afae-2778f056ac9c/detect/iterations/Iteration1/image', formData, {
      headers: {
        'Content-Type': 'application/octet-stream',
        'Prediction-Key': '422f2b3749c74972b7937e41c0626dea'
      }
    })
      .then(response => {
        // Handle API response and extract predictions
        const { predictions } = response.data;
        setPredictions(predictions);
      })
      .catch(error => {
        console.log('Error making prediction:', error);
      });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setImageUrl(URL.createObjectURL(file));
    setPredictions([]);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Upload and Predict</button>



      {imageUrl && (
        <div>
          <h3>Uploaded Image:</h3>
          <div className="image-container">
          <img src={imageUrl} className="uploaded-image" alt="Uploaded" />
          </div>
        </div>
      )}


{predictions.length > 0 && (
  <div>
    <h3>Predictions:</h3>
    {predictions.map((prediction, index) => {
      if (prediction.probability * 100 > 50) {
        return (
          <div key={index}>
            <strong>{prediction.tagName}</strong>: {prediction.probability * 100}%
          </div>
        );
      }
      return null;
    })}
  </div>
)}

    </div>
  );
};

export default CustomVision;