import axios from 'axios'
import { createContext, useReducer, useEffect } from 'react'
import Reducer from './Reducer'

export const Context = createContext()

const I_STATE = {
  user: JSON.parse(localStorage.getItem('admin_session')) || null,
  error: null
}

export const AdminProvider = props => {
  const [state, dispatch] = useReducer(Reducer, I_STATE)
  useEffect(() => {
    localStorage.setItem('admin_session', JSON.stringify(state.user))
  }, [state.user])
  return (
    <Context.Provider
      value={{
        user: state.user,
        error: state.error,
        dispatch
      }}
    >
      {props.children}
    </Context.Provider>
  )
}
