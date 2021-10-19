import axios from 'axios'
import { createContext, useReducer } from 'react'

export const Context = createContext()

let INITIAL_STATE = false
//
// const adminReducer = (state, action) => {
//   switch (action.type) {
//     case 'TOGGLE':
//       return { admin: true }
//     default:
//       return state
//   }
// }

// export const AdminProvider = props => {
//   console.log('Connard')
//   const [state, dispatch] = useReducer(adminReducer, INITIAL_STATE)
// }

export const protectedRoute = () => {
  const token = localStorage.getItem('admin_session')
  axios({
    method: 'POST',
    url: 'http://localhost:3000/auth/protected',
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((err, result) => {
    if (err) {
      console.log(err)
    } else {
      INITIAL_STATE = true
    }
  })
}

export const AdminProvider = props => {
  return (
    <Context.Provider value={{ INITIAL_STATE }}>
      {props.children}
    </Context.Provider>
  )
}
