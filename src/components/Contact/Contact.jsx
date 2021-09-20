import { useState } from 'react/cjs/react.development'

import Swal from 'sweetalert2'

import './Contact.css'

const Contact = () => {
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')

  const [fullMessage, setFullMessage] = useState({})

  const handleMessage = message => {
    setMessage(message)
  }

  const handleEmail = email => {
    setEmail(email)
  }

  const handleSubmit = (e, message, email) => {
    e.preventDefault()
    setFullMessage({ message: message, email: email })
    Swal.fire('Message bien envoyé')
  }

  console.log(fullMessage)

  return (
    <div className='Contact'>
      <h1>Contactez-nous</h1>
      <p>
        Les champs obligatoires sont indiqués par un astérisque{' '}
        <span style={{ color: 'red' }}>*</span>
      </p>
      <form className='contactForm'>
        <div className='messageContainer'>
          <h3>Ma demande</h3>
          <div className='messageContent'>
            <h4>
              Contenu du message <span style={{ color: 'red' }}>*</span>
            </h4>
            <textarea onChange={e => handleMessage(e.target.value)}></textarea>
          </div>
        </div>
        <div className='emailContainer'>
          <h3>Mes coordonnées</h3>
          <div className='emailContent'>
            <h4>
              E-mail <span style={{ color: 'red' }}>*</span>
            </h4>
            <input
              type='email'
              placeholder='monemail@gmail.com'
              onChange={e => handleEmail(e.target.value)}
            />
          </div>
        </div>
        <input
          type='submit'
          className='submitButton'
          value='Envoyer ma demande'
          onClick={e => handleSubmit(e, message, email)}
        />
      </form>
      <p className='info'>
        Selon la Loi n° 78-17 du 06 janvier 1978 de la Commission Nationale de
        l'Informatique et des Libertés (CNIL), relative à l'informatique, aux
        fichiers et aux libertés (article 36), le titulaire du droit d'accès
        peut exiger que soient rectifiées, complétées, clarifiées, mises à jour
        ou effacées les informations le concernant qui sont inexactes,
        incomplètes, équivoques, périmées ou dont la collecte ou l'utilisation,
        la communication ou la conservation est interdite. Pour exercer ce
        droit, merci de le préciser dans le formulaire ci-dessus.
      </p>
    </div>
  )
}

export default Contact
