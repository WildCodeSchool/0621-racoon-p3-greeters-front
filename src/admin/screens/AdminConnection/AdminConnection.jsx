import axios from 'axios'
import { useState, useContext } from 'react'
import { Context } from '../../../context/Context'
import { protectedRoute } from '../../../context/Context'

import Swal from 'sweetalert2'
import Navbar from '../../../components/Navbar/Navbar'

import './AdminConnection.css'

const AdminConnection = () => {
  const [userName, setUserName] = useState()
  const [password, setPassword] = useState()
  const setAdmin = useContext(Context)

  const handleUserName = e => {
    setUserName(e)
  }
  const handlePassword = e => {
    setPassword(e)
  }

  // const handleAdmin = () => {
  //   setAdmin.dispatch({ type: 'TOGGLE' })
  // }

  // const protectedRoute = () => {
  //   const token = localStorage.getItem('admin_session')
  //   axios({
  //     method: 'POST',
  //     url: 'http://localhost:3000/auth/protected',
  //     headers: {
  //       Authorization: `Bearer ${token}`
  //     }
  //   }).then(res => {

  //   })
  // }

  const handleSubmit = async e => {
    e.preventDefault()
    const resCo = await axios
      .post('http://localhost:3000/auth', {
        log: userName,
        password: password
      })
      .then(result => {
        if (result.data != 'Invalid') {
          localStorage['admin_session'] = JSON.stringify(result.data)
          // handleAdmin()
          console.log('FOUUUUUU')
          Swal.fire({
            icon: 'success',
            title: 'Bienvenue',
            confirmButtonColor: 'green'
          }).then(() => {
            protectedRoute()
          })
          // .then(() => {})
          // .then(
          //   () => (window.location = 'http://localhost:3001/admin/content')
          // )
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
