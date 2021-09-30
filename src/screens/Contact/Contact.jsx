import Navbar from '../../components/Navbar/Navbar'

import { useState } from 'react/cjs/react.development'

import axios from 'axios'
import Swal from 'sweetalert2'

import './Contact.css'

const Contact = () => {
  // useEffect(() => {
  //   const recupData = async () => {
  //     const results = await axios.get('http://localhost:3000/description')
  //     console.log(results)
  //     setDescription(results.data)
  //   }

  //   recupData()
  // }, [])

  // DONE civilité sur la route du back
  // DONE civilité dans la BDD
  // AJOUTER tests JS des données avant axios
  // AJOUTER réponse de l'axios si bon message OK sinon erreur

  const [object, setObject] = useState('')
  const [message, setMessage] = useState('')
  const [civility, setCivility] = useState('female')
  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [mail, setMail] = useState('')
  const [postResult, setPostResult] = useState()

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
    const results = await axios
      .post('http://localhost:3000/contact', {
        data: {
          firstname: firstName,
          lastname: lastName,
          civility: civility,
          mail: mail,
          object: object,
          message: message
        }
      })
      .then(setPostResult(results))
  }

  const resetFields = () => {
    setObject('')
    setMessage('')
    setLastName('')
    setFirstName('')
    setMail('')
  }

  const handleSubmit = e => {
    e.preventDefault()
    postData()

    Swal.fire({
      icon: 'success',
      title: 'Message bien envoyé',
      confirmButtonColor: 'red'
    })
    console.log(postData)
    resetFields()
  }

  console.log(typeof civility, civility)

  return (
    <>
      <Navbar />
      <div className='Contact'>
        <h1>Contactez-nous</h1>
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
              <input
                type='text'
                value={object}
                onChange={e => handleObject(e.target.value)}
              />
            </div>

            <div className='messageElement messageContent'>
              <h4>
                Contenu du message <span style={{ color: 'red' }}>*</span>
              </h4>
              <textarea
                value={message}
                onChange={e => handleMessage(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className='infoContainer'>
            <h3>Mes coordonnées</h3>

            <div className='infoElement civilityContent'>
              <h4>
                Civilité <span style={{ color: 'red' }}>*</span>
              </h4>
              <select onChange={e => handleCivility(e.target.value)}>
                <option value='female' selected>
                  Madame
                </option>
                <option value='male'>Monsieur</option>
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
                value={lastName}
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
                value={firstName}
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
                value={mail}
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
          peut exiger que soient rectifiées, complétées, clarifiées, mises à
          jour ou effacées les informations le concernant qui sont inexactes,
          incomplètes, équivoques, périmées ou dont la collecte ou
          l'utilisation, la communication ou la conservation est interdite. Pour
          exercer ce droit, merci de le préciser dans le formulaire ci-dessus.
        </p>
      </div>
    </>
  )
}

export default Contact
