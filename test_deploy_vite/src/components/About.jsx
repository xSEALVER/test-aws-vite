import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import imageAcc from '../assets/honey-acc.jpg';
import image4 from '../assets/honey4.jpg';
import image5 from '../assets/honey5.jpg';
import image6 from '../assets/honey6.jpg';

const BlogSection = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {/* First Card */}
        <div className="col-md-4 mb-4 d-flex">
          <div className="card flex-fill">
            <img 
              src={image4}
              className="card-img-top" 
              alt="Read More" 
            />
            <div className="card-body">
              <h5 className="card-title">NOTRE HISTOIRE</h5>
              <p className="card-text">
                Inspirés par le savoir-faire des apiculteurs, 
                nous nous engageons à offrir un miel de qualité, 
                récolté avec soin et respect de l’environnement. 
                Aujourd'hui, nous continuons à promouvoir un produit naturel, 
                symbole de douceur et d'authenticité, 
                qui traverse le temps et les cultures.
              </p>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="col-md-4 mb-4 d-flex">
          <div className="card flex-fill">
            <img 
              src={image5}
              className="card-img-top" 
              alt="Interior Design" 
            />
            <div className="card-body">
              <h5 className="card-title">NOTRE MISSION</h5>
              <p className="card-text">
                Aujourd'hui, notre mission est simple : 
                offrir un miel de la plus haute qualité tout en préservant l'environnement et les abeilles qui le produisent. 
                Chaque pot de miel est le fruit de cette passion et d'un engagement durable envers la nature.
              </p>
            </div>
            <div id='target1'></div>
          </div>
        </div>

        {/* Third Card */}
        <div className="col-md-4 mb-4 d-flex">
          <div className="card flex-fill">
            <img 
              src={image6} 
              className="card-img-top" 
              alt="Another Design" 
            />
            <div className="card-body">
              <h5 className="card-title">NOTRE VISION</h5>
              <p className="card-text">
                Nous croyons fermement que la nature doit être respectée et protégée. 
                Notre vision est de bâtir un avenir où l'homme et la nature coexistent en harmonie, 
                en plaçant les abeilles et la biodiversité au cœur de notre engagement. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;


