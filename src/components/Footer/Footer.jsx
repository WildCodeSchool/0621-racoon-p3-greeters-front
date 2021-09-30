import React from 'react'

import { NavLink } from 'react-router-dom'

import '../../components/Footer/Footer.css'
import 'boxicons'

<<<<<<< HEAD

const Footer = () => {
  return (
    <div className='row'>
       
      <div className='contact'>

        


=======
const Footer = () => {
  return (
    <div className='row'>
      <div className='contact'>
>>>>>>> 1d3bfecd33125c3f993a30e5f14c57b56f7a30f3
        <div className='social'>
          <a
            href='https://www.instagram.com/loire_valley_greeters/'
            target='_blank'
            rel='noreferrer'
          >
<<<<<<< HEAD
          
          <box-icon className='icone' type='logo' name='instagram'></box-icon>
  
=======
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
            </svg>
>>>>>>> 1d3bfecd33125c3f993a30e5f14c57b56f7a30f3
          </a>
        </div>
        <div className='social'>
          <a
            href='https://www.facebook.com/loirevalleygreeters/'
            target='_blank'
            rel='noreferrer'
          >
<<<<<<< HEAD
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
=======
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' />
            </svg>
          </a>
        </div>
        <div className='social'>
          <a
            href='https://twitter.com/francegreeters?lang=fr'
            target='_blank'
            rel='noreferrer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
            </svg>
          </a>
        </div>
        <NavLink to='/contact'>
          <button className='button'>Contactez-nous</button>
        </NavLink>
>>>>>>> 1d3bfecd33125c3f993a30e5f14c57b56f7a30f3
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
<<<<<<< HEAD

        {/* Column 2 */}
        <div className='Titre'>
          <h4 className='sousTitre'>Accès rapides</h4>
          <ul className='Info 2'>
            <li>Accueil</li>
            <li>Rencontrer un Greeters</li>
            <li>Réservation</li>
          </ul>
        </div>

=======

        {/* Column 2 */}
        <div className='Titre'>
          <h4 className='sousTitre'>Accès rapides</h4>
          <ul className='Info 2'>
            <li>Accueil</li>
            <li>Rencontrer un Greeters</li>
            <li>Réservation</li>
          </ul>
        </div>

>>>>>>> 1d3bfecd33125c3f993a30e5f14c57b56f7a30f3
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
      </div>
    </div>
  )
}

export default Footer
