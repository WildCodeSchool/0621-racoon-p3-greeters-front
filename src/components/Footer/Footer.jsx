import React from 'react'
import '../../components/Footer/Footer.css'

const Footer = () => {
    return(

            <div className='row'>
              {/* Column1 */}
              <div className='col'>
                <h4>Office de tourisme</h4>
                <ul className='list-unstyled'>
                  <li>info@tours-tourisme.fr</li>
                  <li>02 47 70 37 37</li>
                  <li>78-82 rue de Bernard Palissy</li>
                  <li>37 042 Tours</li>
                </ul>

              </div>
              {/* Column 2 */}
              <div className='list-unstyled'>
              <h4>Accès rapides</h4>
                <ul className='list-unstyled'>
                  <li>Actualité</li>
                  <li>les incontournables</li>
                  <li>Expériences</li>
                  <li>Réservation</li>
                  <li>Votre séjour</li>
                  <li>Boutique</li>
                </ul>
                
              </div>
              {/*Column 3 */}
              <div className='list-unstyled'>
              <h4>Professionnels</h4>
                <ul className='list-unstyled'>
                  <li>Partenaires</li>
                  <li>Tourisme d'affaire</li>
                  <li>Handicap</li>
                  <li>Propriétaires</li>
                  <li>Presse</li>
                </ul>
                
           </div>
             </div>
                          
    )
}

export default Footer;