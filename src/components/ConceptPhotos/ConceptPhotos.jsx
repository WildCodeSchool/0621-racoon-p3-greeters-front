import { useState } from 'react'

import image2 from '../../assets/concept-gauche.jpeg'
import image3 from '../../assets/concept-droit.jpeg'

import './ConceptPhotos.css'

const ConceptPhotos = () => {
  const [showResults, setShowResults] = useState(false)
  const handleResult = setShowResults(true)
  return (
    <div className='ConceptPhotos-Container'>
      {showResults ? <Results /> : null}
      <div className='ConceptPhotos-Block-Image1'>
        <img
          className='ConceptPhotos-img'
          src={image2}
          alt='Image bas gauche'
        />
        <button
          onClick={() => setShowResults(!showResults)}
          className='ConceptPhotos-btn-left'
        >
          Le concept Greeters
        </button>
      </div>

      <div>
        <h2 className='ConceptPhotos-Title-Left'>
          Partez en balade avec un habitant !
        </h2>
        <p>
          C'est en 1992 à New York que naît le concept Greeters. Lynn Brooks,
          avec la complicité de son réseau d’amis, propose aux touristes des
          balades insolites organisées par des habitants dans les quartiers de
          la « Big Apple ». Un greeter "hôte" en anglais vous accueille deux
          heures environ gratuitement pour une balade conviviale, authentique et
          riche en échanges ! Depuis 2010, le mouvement connaît un engouement
          exceptionnel sur les cinq continents. Les différentes destinations
          greeters décident alors de se regrouper et de créer un réseau
          international : le Global Greeter Network (GGN). En France, les
          organisations greeters sont coordonnées depuis 2011 par la Fédération
          France Greeters.
        </p>
      </div>


      {/* Créer une fonction au dessus du return et dans cette fonction la fonction va appeler mon setShowResult handleResult */}

      <div className='ConceptPhotos-Block-Image2'>
        <img className='ConceptPhotos-img' src={image3} alt='Image bas droit' />
        <button className='ConceptPhotos-btn-right'>Nos valeurs</button>
      </div>
      <div>
        <h2 className='ConceptPhotos-Titre-Right'>
          6 valeurs fondamentales communes
        </h2>
        <p>
          Tous les programmes Greeters du monde, membres du réseau international
          Global Greeters Network, partagent des valeurs fondamentales communes.
          Ces six valeurs doivent être respectées pour faire partie du GGN.
          Elles sont reprises intégralement au cœur du fonctionnement de chaque
          organisation : Les Greeters sont bénévoles, ils sont un visage amical
          de la destination pour le(s)visiteur(s). Les Greeters accueillent des
          individuels et des groupes jusqu’à 6 personnes (famille ou amis). La
          rencontre avec un Greeter est entièrement gratuite. Toutefois,
          certaines organisations à but non lucratif acceptent des donations qui
          contribuent à leur fonctionnement. Les Greeters accueillent toute
          personne, visiteur et bénévole, sans aucune discrimination. Les
          réseaux de Greeters s’inscrivent dans une démarche de tourisme durable
          respectant l’environnement et l’Homme. Ils participent à
          l’enrichissement culturel et économique des communautés locales et
          contribuent à donner une image positive de la destination. Les réseaux
          de Greeters favorisent l’enrichissement mutuel et les échanges
          culturels entre individus pour un monde meilleur. La rencontre et le
          partage entre visiteurs et habitants permettent de comprendre les
          différences culturelles. Ils agissent comme éléments de cohésion entre
          les hommes.
        </p>
      </div>
    </div>
  )
}

export default ConceptPhotos

//étape 1, créer une div
//étapes 2, tu crées une state qui va prendre le message à afficher
//étape 3, au clique sur concept ou valeur ça va changer la valeur de la state
//étape 4, tu affiches dans ta div les données contenu dans ta state (et qui du coup changera en fonction de sur quoi tu cliques (concept ou valeur))
//etape 5, créer une state pour afficher ou cacher la div (en mode true ou false)
//etape 6, faire une ternaire pour va vérifier si la state pour afficher est true ou false, et si c'est true tu affiches la div
//PS: pour tester tu mets un un texte à la con dans la div au début
