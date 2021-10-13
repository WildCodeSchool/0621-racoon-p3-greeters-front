import React from 'react'
import emailjs from 'emailjs-com'

import { useEffect } from 'react'

import Swal from 'sweetalert2'

import Aos from 'aos'
import 'aos/dist/aos.css'

import './Contact.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_me1i1xh',
        'template_88diors',
        e.target,
        'user_0L8nH4eKnHmmnaXaH2YLq'
      )
      .then(
        result => {
          console.log(result.text)
          Swal.fire({
            icon: 'success',
            title: 'Votre message a bien été envoyé',
            timer: 1500
          })
        },
        error => {
          console.log(error.text)
          Swal.fire({
            icon: 'error',
            title: "Une erreur s'est produite lors de l'envoi du message",
            timer: 1500
          })
        }
      )
  }

  return (
    <>
      <Navbar />
      <div className='Contact' data-aos='fade-in'>
        <h1>Contactez-nous</h1>
        <p>
          Les champs obligatoires sont indiqués par un astérisque{' '}
          <span style={{ color: 'red' }}>*</span>
        </p>
        <form className='contactForm' onSubmit={sendEmail}>
          <div className='messageContainer'>
            <h3>Ma demande</h3>

            <div className='messageElement objectContent'>
              <h4>
                Objet du message <span style={{ color: 'red' }}>*</span>
              </h4>
              <input type='text' name='user_object' />
            </div>

            <div className='messageElement messageContent'>
              <h4>
                Contenu du message <span style={{ color: 'red' }}>*</span>
              </h4>
              <textarea name='user_message'></textarea>
            </div>
          </div>
          <div className='infoContainer'>
            <h3>Mes coordonnées</h3>

            <div className='infoElement civilityContent'>
              <h4>
                Civilité <span style={{ color: 'red' }}>*</span>
              </h4>
              <select name='user_civility'>
                <option value='Madame' defaultValue>
                  Madame
                </option>
                <option value='Monsieur'>Monsieur</option>
              </select>
            </div>

            <div className='infoElement lastNameContent'>
              <h4>
                Nom <span style={{ color: 'red' }}>*</span>
              </h4>
              <input type='text' placeholder='Dupont' name='user_lastname' />
            </div>

            <div className='infoElement firstNameContent'>
              <h4>
                Prénom <span style={{ color: 'red' }}>*</span>
              </h4>
              <input type='text' placeholder='Nicolas' name='user_firstname' />
            </div>

            <div className='infoElement emailContent'>
              <h4>
                E-mail <span style={{ color: 'red' }}>*</span>
              </h4>
              <input
                type='email'
                placeholder='monemail@gmail.com'
                name='user_email'
              />
            </div>
          </div>

          <input
            type='submit'
            className='submitButton'
            value='Envoyer ma demande'
          />
        </form>
        <p className='info'>
          Selon la Loi n° 78-17 du 06 janvier 1978 de la Commission Nationale de
          l'Informatique et des Libertés (CNIL), relative à l'informatique, aux
          fichiers et aux libertés (article 36), le titulaire du droit d'accès
          peut exiger que soient rectifiées, complétées, clarifiées, mises à
          jour ou effacées les informations le concernant qui sont inexactes,
          incomplètes, équivoques, périmées ou dont la collecte ou
          l'utilisation, la communication ou la conservation est interdite. Pour
          exercer ce droit, merci de le préciser dans le formulaire ci-dessus.
        </p>
      </div>
      <Footer />
    </>
  )
}

export default Contact
