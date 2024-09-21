import React from 'react'
import imageMain from '../assets/honey-pots.jpg';
import image1 from '../assets/honey1.jpg';
import image2 from '../assets/honey2.jpg';
import image3 from '../assets/honey3.jpg';
import image4 from '../assets/honey4.jpg';
import image5 from '../assets/honey5.jpg';
import image6 from '../assets/honey6.jpg';



const ThreeComp = () => {
  return (
    <>
        <div className='mt-5 mb-5'>
            <h1 className='text-center'>Douces Évasions Inoubliables</h1>
            <p className='text-center'>Explorez les trésors dorés de la nature et laissez-vous emporter par des saveurs envoûtantes de miel en un rien de temps.</p>
        </div>


            <div className="d-flex align-items-center gap-4 px-5 mb-5">
                <img
                    src={image3}
                    alt="Description"
                    width="500"
                    height="370"
                    className="img-fluid rounded-1"
                />
                <div className="ml-3 text-center flex-grow-1 lh-lg">
                    <p className='text-center'>
                    Avec notre sélection de miels, découvrir des saveurs exquises n'a jamais été aussi simple.
                    Notre présentation vous permet d'explorer des variétés fascinantes sans distraction, 
                    tout en vous offrant une interface claire et intuitive. Profitez d'une expérience de découverte fluide,
                    où chaque détail est soigneusement pensé pour vous aider à savourer le miel parfait pour sublimer vos moments sucrés.
                    </p>
                </div>
            </div>

            <div className="d-flex align-items-center gap-4 px-5">
                <div className="ml-3 text-center flex-grow-1 lh-lg">
                    <p>
                    Découvrez un monde de possibilités avec notre miel,
                    où une multitude de saveurs authentiques vous attend.
                    Que vous rêviez de douceurs exotiques ou de plaisirs locaux,
                    nos produits vous offrent un accès illimité à des choix variés et captivants.
                    Plongez dans une expérience gustative unique et trouvez le miel idéal pour chaque envie,
                    tout en profitant d'une présentation facile à explorer et parfaitement adaptée à vos attentes.
                    </p>
                </div>
                <img
                    src={image2}
                    alt="Description"
                    width="500"
                    height="370"
                    className="img-fluid rounded-1"
                />
            </div>

            <div className="d-flex align-items-center gap-4 px-5 mb-5 mt-5">
                <img
                    src={image1}
                    alt="Description"
                    width="500"
                    height="370"
                    className="img-fluid rounded-1"
                />
                <div className="ml-3 text-center flex-grow-1 lh-lg">
                    <p className='text-center'>
                    Profitez de voyages exceptionnels à des prix bas et abordables grâce à notre plateforme. 
                    Nous nous engageons à vous offrir des options économiques qui conviennent à tous les budgets, 
                    sans sacrifier la qualité. 
                    Explorez une large sélection de destinations à des tarifs avantageux et réalisez vos projets de voyage sans souci financier. 
                    Avec nous, chaque aventure devient accessible et plaisante.
                    </p>
                </div>
            </div>
    </>
  )
}

export default ThreeComp