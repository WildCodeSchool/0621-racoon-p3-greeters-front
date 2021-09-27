import { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'

import axios from 'axios'
import Swal from 'sweetalert2'

import './Contact.css'

const Contact = () => {
  const [description, setDescription] = useState([])
  /*
  useEffect(() => {
    const recupData = async () => {
      const results = await axios.get('http://localhost:3000/description')
      console.log(results)
      setDescription(results.data)
    }
    recupData()
  }, [])
  */

  const [object, setObject] = useState('')
  const [message, setMessage] = useState('')
  const [civility, setCivility] = useState('')
  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [mail, setMail] = useState('')

  const [fullMessage, setFullMessage] = useState({})

  const handleObject = object => {
    setObject(object)
  }

  const handleMessage = message => {
    setMessage(message)
  }

  const handleCivility = civility => {
    setCivility(civility)
  }

  const handleLastName = lastName => {
    setLastName(lastName)
  }

  const handleFirstName = firstName => {
    setFirstName(firstName)
  }

  const handleMail = mail => {
    setMail(mail)
  }

  const postData = async () => {
    const results = await axios.post('http://localhost:3000/contact', {
      data: {
        firstname: firstName,
        lastname: lastName,
        mail: mail,
        object: object,
        message: message
      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setFullMessage({
      object: object,
      message: message,
      civility: civility,
      lastName: lastName,
      firstName: firstName,
      mail: mail
    })
    postData()

    Swal.fire({
      icon: 'success',
      title: 'Message bien envoyé',
      confirmButtonColor: 'red'
    })
  }
  console.log(description)
  return (
    <div className='Contact'>
      <h1>Contactez-nous</h1>
      {/* <p>{description[0].description_title1_fr}</p> */}
      <p>
        Les champs obligatoires sont indiqués par un astérisque{' '}
        <span style={{ color: 'red' }}>*</span>
      </p>
      <form className='contactForm'>
        <div className='messageContainer'>
          <h3>Ma demande</h3>

          <div className='messageElement objectContent'>
            <h4>
              Objet du message <span style={{ color: 'red' }}>*</span>
            </h4>
            <input type='text' onChange={e => handleObject(e.target.value)} />
          </div>

          <div className='messageElement messageContent'>
            <h4>
              Contenu du message <span style={{ color: 'red' }}>*</span>
            </h4>
            <textarea onChange={e => handleMessage(e.target.value)}></textarea>
          </div>
        </div>
        <div className='infoContainer'>
          <h3>Mes coordonnées</h3>

          <div className='infoElement civilityContent'>
            <h4>
              Civilité <span style={{ color: 'red' }}>*</span>
            </h4>
            <select>
              <option value='madame'>Madame</option>
              <option value='monsieur'>Monsieur</option>
            </select>
          </div>

          <div className='infoElement lastNameContent'>
            <h4>
              Nom <span style={{ color: 'red' }}>*</span>
            </h4>
            <input
              type='text'
              placeholder='Dupont'
              onChange={e => handleLastName(e.target.value)}
            />
          </div>

          <div className='infoElement firstNameContent'>
            <h4>
              Prénom <span style={{ color: 'red' }}>*</span>
            </h4>
            <input
              type='text'
              placeholder='Nicolas'
              onChange={e => handleFirstName(e.target.value)}
            />
          </div>

          <div className='infoElement emailContent'>
            <h4>
              E-mail <span style={{ color: 'red' }}>*</span>
            </h4>
            <input
              type='email'
              placeholder='monemail@gmail.com'
              onChange={e => handleMail(e.target.value)}
            />
          </div>
        </div>

        <input
          type='submit'
          className='submitButton'
          value='Envoyer ma demande'
          onClick={e => handleSubmit(e)}
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
