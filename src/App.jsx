import { useState } from 'react'
import './App.css'
import { RouterConfig } from './Config/RouterConfig'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterConfig />
    </>
  )
}

export default App
