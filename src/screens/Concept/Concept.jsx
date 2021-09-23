import ConceptBanner from '../../components/ConceptBanner/ConceptBanner'
import ConceptDescription from '../../components/ConceptDescription/ConceptDescription'
import ConceptPhoto from '../../components/ConceptPhotos/ConceptPhotos'
// import image1 from '../../assets/concept-accueil.jpeg'
// import image2 from '../../assets/concept-gauche.jpeg'
// import image3 from '../../assets/concept-droit.jpeg'


import './Concept.css'

const Concept = () => {
  return (
    <div className='concept'>
      <ConceptBanner/>
      <ConceptDescription/>
      <ConceptPhoto/>
    </div>
  )
}


// const Concept = () => {
//   return (
//     <div className="Concept">
//   <h2 className='concept-title'>Qu'est ce qu'un Greeters ?</h2>
//    <img src={image1} alt="Image d'accueil" />
//   <h2 className="Rencontre">Rencontrez un greeter, votre ami en Touraine ! </h2>
// <p className="Texte">Le greeter, “hôte en anglais” est un habitant passionné par son territoire, sa ville, son village et accueille le visiteur lors d’une balade conviviale, authentique et instructive.  Il vous emmène autour de ses lieux préférés, vous offre ses « bons plans » et bonnes adresses … le tout dans une démarche entièrement basée sur le bénévolat ! Ces balades de 2 heures environ sont gratuites.

// Un Greeter n’est pas un guide. Les thèmes de balades sont variés et sont avant tout un prétexte pour une rencontre, une expérience humaine riche et un échange culturel qui restent à la base du rendez-vous.

// Ce mouvement mondial, précurseur du tourisme participatif, est né aux États-Unis en 1992. Il rencontre un grand succès en France et dans le monde.

// Loire Valley Greeters est membre de la Fédération Française Greeters et Global Greeters Network et s'engage à respecter la charte et les valeurs Greeters </p>
// <div className="bas-de-page">
// <img src={image2} alt="Image bas gauche" />
// <img src={image3} alt="Image bas droit" />

// <button className='concept-btn'>Le concept Greeters</button>
// <button className='concept-btn'>Nos valeurs</button>
// </div>

// </div>
//   )
// }

export default Concept;
