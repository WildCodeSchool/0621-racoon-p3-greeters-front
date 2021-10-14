import React, { useState, createContext } from 'react'

export const LanguageContext = createContext()

const LanguageContextProvider = props => {
  const [language, setLanguage] = useState([{ name: 'sandwich au caca' }])
  return (
    <LanguageContext.Provider value={{ language }}>
      {props.children}
    </LanguageContext.Provider>
  )
}

export default LanguageContextProvider
