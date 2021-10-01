import './Modal.css'

const Modal = ({ isShowing, hide, title, ...props }) => {
  return isShowing ? (
    <div className='modal-overlay'>
      <div className='modal-wrapper'>
        <div className='modal'>
          <button type='button' className='modal-close-button' onClick={hide}>
            <span>&times;</span>
          </button>
          <div className='modal-header'>
            <h4>{title}</h4>
          </div>
          <div className='modal-body'>{props.children}</div>
        </div>
      </div>
    </div>
  ) : null
}

export default Modal
