import { Editor } from '@tinymce/tinymce-react'

import './AdminEditor.css'

const AdminEditor = () => {
  return (
    <div className='AdminEditor'>
      <Editor
        initialValue='<p>Initial content</p>'
        apiKey='1jt2b7lqqvq3tmf0mkmeh5wuaphsb10o682j7wzo0zfqbn5h'
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image',
            'charmap print preview anchor help',
            'searchreplace visualblocks code',
            'insertdatetime media table paste wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic | \
          alignleft aligncenter alignright | \
          bullist numlist outdent indent | help'
        }}
      />
    </div>
  )
}

export default AdminEditor
