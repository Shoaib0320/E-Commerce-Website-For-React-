import { useState } from 'react'
import './App.css'
import { RouterConfig } from './Config/RouterConfig'
import { CartProvider } from './Screens/SingleScreen/CartContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CartProvider>
        <RouterConfig />
    </CartProvider>
    </>
  )
}

export default App
