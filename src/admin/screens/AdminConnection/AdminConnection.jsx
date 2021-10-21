import axios from 'axios'
import { useState, useContext, useEffect } from 'react'
import { Context } from '../../../context/Context'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'

import Aos from 'aos'
import 'aos/dist/aos.css'

import './AdminConnection.css'
import { Navbar } from 'react-bootstrap'

const AdminConnection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const [userName, setUserName] = useState()
  const [password, setPassword] = useState()
  const { dispatch } = useContext(Context)

  let history = useHistory()

  const handleUserName = e => {
    setUserName(e)
  }
  const handlePassword = e => {
    setPassword(e)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const resCo = await axios
      .post(`${process.env.REACT_APP_API_ROUTE}/auth`, {
        log: userName,
        password: password
      })
      .then(result => {
        if (result.data != 'Invalid') {
          dispatch({
            type: 'LOGIN_SUCCESS',
            payload: result.data
          })

          Swal.fire({
            icon: 'success',
            title: 'Bienvenue',
            confirmButtonColor: 'green'
          }).then(() => {
            history.push('/admin')
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: "Nom d'utilisateur ou mot de passe incorrect",
            confirmButtonColor: 'red'
          })
        }
      })
  }

  return (
    <>
      <Navbar />
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
    </>
  )
}

export default AdminConnection
