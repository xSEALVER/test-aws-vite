import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import mielContact from '../assets/honey-pots.jpg';

const ContactUs = () => {
  return (
<>
<div id='target2'></div>
<div></div>
    <div className="container my-5">
      <div className="row">
        {/* Left section for text and form */}
        <div className="col-md-6">
          <h1 className="fw-bold">CONTACTEZ-NOUS.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

          <h4 className="mt-4 fw-bold">Envoyer nous un message.</h4>

          <form className="mt-3">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Prénom</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" className="btn btn-warning fw-bold text-white">ENVOYER MESSAGE</button>
          </form>
        </div>

        {/* Right section for image */}
        <div className="col-md-6">
          <img src={mielContact} alt="building" className="img-fluid" />
        </div>
      </div>
    </div>
</>
   
  );
};

export default ContactUs;
