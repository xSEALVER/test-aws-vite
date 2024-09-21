// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import imageAcc from '../assets/honey-acc.jpg';




// const Hero = () => {
//   return (
//     <>
//             <div className="w-100 position-relative">
//                 <img className="w-100" src={imageAcc} alt="img-accueil" />
//                 <div className="position-absolute top-50 start-50 translate-middle text-center">
//                     <h1 className='text-white'>Your Journey, Your Story</h1>
//                     <p className='text-white'>Choose Your Favourite Destination.</p>
//                     <button className="btn btn-primary p-2 rounded-3">
//                         <a href="/signup" className="text-white text-decoration-none">Réserver maintenant</a>
//                     </button>
//                 </div>
//             </div>
//         </>
    
//   );
// };

// export default Hero;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import imageAcc from '../assets/honey-acc.jpg';

const Hero = () => {
  return (
    <div className="w-100 position-relative">
      <img className="w-100" src={imageAcc} alt="img-accueil" />
      <div className="position-absolute top-50 start-0 translate-middle-y text-start p-5" style={{ maxWidth: '600px' }}>
        <h2 className='text-white mb-3'>Votre Aventure, Votre Douceur</h2>
        <p className='text-white mb-4'>Découvrez la douceur du plus beau cadeau de la nature. Laissez le miel ajouter une touche dorée à votre gout.</p>
        <button className="btn btn-primary p-2 rounded-3">
          <a href="Lire Plus" className="text-white text-decoration-none btn-warning">Lire Plus</a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
