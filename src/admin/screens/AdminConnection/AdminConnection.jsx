import { useState } from 'react/cjs/react.development'

import Swal from 'sweetalert2'

import './AdminConnection.css'

const AdminConnection = () => {
  const [userName, setUserName] = useState()
  const [password, setPassword] = useState()

  const handleUserName = e => {
    setUserName(e)
  }
  const handlePassword = e => {
    setPassword(e)
  }

  const handleSubmit = e => {
    e.preventDefault()

    let err = true

    if (err) {
      Swal.fire({
        icon: 'error',
        title: "Nom d'utilisateur ou mot de passe incorrect",
        confirmButtonColor: 'red'
      })
    }
  }

  console.log(userName, password)
  return (
    <div className='AdminConnection'>
      <form>
        <fieldset>
          <label htmlFor='userName'>
            Nom d'utilisateur <span className='connection-required'>*</span>
          </label>
          <input
            type='text'
            id='userName'
            onChange={e => handleUserName(e.target.value)}
          />
          <caption>
            Saississez votre nom d'utilisateur pour Greeters Loire Valley
          </caption>
        </fieldset>
        <fieldset>
          <label htmlFor='password'>
            Mot de passe <span className='connection-required'>*</span>
          </label>
          <input
            type='password'
            id='password'
            onChange={e => handlePassword(e.target.value)}
          />
          <caption>
            Saississez le mot de passe correspondant à votre nom d'utilisateur
          </caption>
        </fieldset>
        <button onClick={handleSubmit}>Se connecter</button>
      </form>
    </div>
  )
}

export default AdminConnection