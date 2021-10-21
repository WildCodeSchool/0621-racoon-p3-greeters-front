import { createContext, useReducer } from 'react'

export const LangueContext = createContext()

const INITIAL_STATE = { englishMode: false }

const languageReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return { englishMode: !state.englishMode }
    default:
      return state
  }
}

export const LanguageProvider = props => {
  const [state, dispatch] = useReducer(languageReducer, INITIAL_STATE)

  return (
    <LangueContext.Provider value={{ state, dispatch }}>
      {props.children}
    </LangueContext.Provider>
  )
}
