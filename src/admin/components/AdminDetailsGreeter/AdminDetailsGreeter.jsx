import './AdminDetailsGreeter.css'

const AdminDetailsGreeter = () => {
  return (
    <>
      <div className='admin-details-greeter-container'>
        <h1 className='admin-details-greeter-title'>Greeter</h1>
        <ul className='admin-details-greeter-list'>
          <li className='admin-details-greeter-item'>Prénom : </li>
          <li className='admin-details-greeter-item'>Ville : </li>
          <li className='admin-details-greeter-item'>Langues : </li>
          <li className='admin-details-greeter-item'>Phrase d'accroche : </li>
          <li className='admin-details-greeter-item'>Thématiques : </li>
          <li className='admin-details-greeter-item'>Descriptif : </li>
          <li className='admin-details-greeter-item'>Photo : </li>
        </ul>
      </div>
    </>
  )
}

export default AdminDetailsGreeter
