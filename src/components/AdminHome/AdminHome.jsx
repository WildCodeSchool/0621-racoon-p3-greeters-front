import React from 'react'
import './AdminHome.css'

const AdminHome = () => {
  return (
    <>
      <div className='AdminHome-container'>
        <h1 className='AdminHome-title'>Contenu</h1>
        <h3 className='AdminHome-litle-title'>
          Gestion du contenu des pages du site
        </h3>
      </div>
      <div className='AdminHome-container'>
        <h1 className='AdminHome-title'>Greeters</h1>
        <h3 className='AdminHome-litle-title'>
          Gestion des profils des Greeters
        </h3>
      </div>
      <div className='AdminHome-container'>
        <h1 className='AdminHome-title'>Administration</h1>
        <h3 className='AdminHome-litle-title'>
          Gestion des comptes et droits administrateurs
        </h3>
      </div>
    </>
  )
}

export default AdminHome
