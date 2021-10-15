import { useState } from 'react'

const UseModal = () => {
  const [isShowing, setIsShowing] = useState(false)
  const toggle = () => {
    setIsShowing(!isShowing)
  }

  return { isShowing, toggle }
}

export default UseModal
