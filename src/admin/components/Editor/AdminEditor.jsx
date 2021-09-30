import { Modal, Button } from 'react-bootstrap'

import './AdminEditor.css'

const AdminEditor = () => {
  return (
    <div className='AdminEditor'>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant='secondary'>Close</Button>
          <Button variant='primary'>Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}

export default AdminEditor
