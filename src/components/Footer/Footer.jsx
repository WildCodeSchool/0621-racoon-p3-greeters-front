import React from 'react'

import { NavLink } from 'react-router-dom'

import '../../components/Footer/Footer.css'
import 'boxicons'
import photo1 from '../../assets/logo-FFG-250-Transp.png'
import photo2 from '../../assets/IGA-Logo-landscape_528x200px_72dpi.jpeg'

const Footer = () => {
  return (
    <div className='row'>
       
      <div className='contact'>

        


        <div className='social'>
          <a
            href='https://www.instagram.com/loire_valley_greeters/'
            target='_blank'
            rel='noreferrer'
          >
          
          <box-icon className='icone' type='logo' name='instagram'></box-icon>
  
          </a>
        </div>
        <div className='social'>
          <a
            href='https://www.facebook.com/loirevalleygreeters/'
            target='_blank'
            rel='noreferrer'
          >
            <box-icon className='icone' type='logo' name='facebook'></box-icon>
          </a>
        </div>
        <div className='social'>
          <a
            href='https://twitter.com/francegreeters?lang=fr'
            target='_blank'
            rel='noreferrer'
          >
           <box-icon className='icone' type='logo' name='twitter'></box-icon>
          </a>
        </div>
        <button className='button'>Contactez-nous</button>
      </div>

      <div className='globalCollon'>
        
        {/* Column1 */}
        <div className='Titre'>
          <h4 className='sousTitre'>Office de tourisme</h4>
          <ul className='Info'>
            <li>
              <a
                href='https://www.tours-tourisme.fr/'
                target='_blank'
                rel='noreferrer'
              >
                info@tours-tourisme.fr
              </a>
            </li>
            <li> 02 47 70 37 37</li>
            <li>
              <a
                href='https://goo.gl/maps/HrpUV6CXtHkvmFfd8'
                target='_blank'
                rel='noreferrer'
              >
                78-82 rue de Bernard Palissy Tours
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className='Titre'>
          <h4 className='sousTitre'>Accès rapides</h4>
          <ul className='Info 2'>
            <li>Accueil</li>
            <li>Rencontrer un Greeters</li>
            <li>Réservation</li>
          </ul>
        </div>

        {/*Column 3 */}
        <div className='Titre'>
          <h4 className='sousTitre'>Liens pratiques</h4>
          <ul className='Info 3'>
            <li>
              <a
                href='http://www.atout-france.fr/'
                target='_blank'
                rel='noreferrer'
              >
                Atout France
              </a>
            </li>
            <li>
              <a
                href='https://tourisme-pro-centre-valdeloire.fr/'
                target='_blank'
                rel='noreferrer'
              >
                CRT Centre Val de Loire
              </a>
            </li>
            <li>
              <a
                href='https://www.touraineloirevalley.com/'
                target='_blank'
                rel='noreferrer'
              >
                L'Agence Départementale du Tourisme
              </a>
            </li>
            <li>
              <a
                href='https://www.tours.aeroport.fr/'
                target='_blank'
                rel='noreferrer'
              >
                L'Aéroport Tours Val de Loire
              </a>
            </li>
            <li>
              <a
                href='https://www.sncf.com/fr/gares/tours/OCE87571000/departs-arrivees/gl/departs'
                target='_blank'
                rel='noreferrer'
              >
                Gare SCNCF
              </a>
            </li>
            <li>
              <a
                href='http://www.welcomechange.fr/'
                target='_blank'
                rel='noreferrer'
              >
                Bureau de change
              </a>
            </li>
            <li>
              <a
                href='https://www.nannybag.com/fr/consigne-bagage/tours/gare'
                target='_blank'
                rel='noreferrer'
              >
                Consignes
              </a>
            </li>
          </ul>
          
         
          
        </div>
        <div className='photo'>
        <img src={photo1}/>
        <img src={photo2}/>
        </div>
      </div>
     
    </div>
  )
}

export default Footer
