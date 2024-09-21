import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import imageMain from '../assets/honey-pots.jpg';
import image4 from '../assets/honey4.jpg';
import image5 from '../assets/honey5.jpg';
import image6 from '../assets/honey6.jpg';
import image8 from '../assets/honey8.jpg';


   

const ImageGrid = () => {
  return (
    <div className="container my-4 mt-5 mb-4">
      <div className="row">
        <div className="col-md-4 mb-4">
          <img src={image4} alt="Artwork" className="img-fluid" />
        </div>
        <div className="col-md-4 mb-4 ">
          <img src={image5} alt="Watch" className="img-fluid" />
        </div>
        <div className="col-md-4 mb-4 ">
          <img src={image6} alt="Decor" className="img-fluid" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4 ">
          <img src={imageMain} alt="Shoe" className="img-fluid" />
        </div>
        <div className="col-md-4 mb-4">
          <img src={image8} alt="Plant" className="img-fluid" />
        </div>
        <div className="col-md-4 mb-4 ">
          <img src={imageMain} alt="Lemon" className="img-fluid m-0 p-0" />
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
