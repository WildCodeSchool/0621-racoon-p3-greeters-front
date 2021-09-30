import { useState } from 'react/cjs/react.development'

import AdminEditor from '../../components/Editor/AdminEditor'

import './AdminContent.css'

const AdminContent = () => {
  let page = 'whatIsAGreeter'
  let type = 'input'
  let data = {
    title: "Qu'est ce qu'un Greeter ?",
    description:
      'Un Greeter est une personne bénévole qui va faire visiter ses endroits préférés convivialement avec des touristes'
  }

  const [show, setShow] = useState(true)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <div className='AdminContent-Container'>
        <h2 AdminContent-Title>Contenu</h2>
        <ul>
          <li onClick={handleShow}>Qu'est ce qu'un Greeter</li>
          <li onClick={handleShow}>Rencontrer un Greeter</li>
          <li onClick={handleShow}>Profil d'un Greeter</li>
          <li onClick={handleShow}>Contact</li>
        </ul>
      </div>

      <AdminEditor page={page} type={type} status={handleClose} data={data} />
    </>
  )
}

export default AdminContent
