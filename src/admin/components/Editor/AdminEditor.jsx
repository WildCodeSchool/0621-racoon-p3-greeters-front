import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react/cjs/react.development'

import './AdminEditor.css'

const AdminEditor = ({ page, type, status, data }) => {
  const [changeValue, setChangeValue] = useState('')

  return (
    <div className='AdminEditor'>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{data.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {type === 'input' ? (
            <input type='text' value={data.description} />
          ) : (
            <textarea value={data.description}></textarea>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant='secondary' onClick={status()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}

export default AdminEditor
