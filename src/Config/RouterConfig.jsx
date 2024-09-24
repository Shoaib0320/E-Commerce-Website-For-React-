import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../Screens/Home/Home'
import { About } from '../Screens/About/About'
import { Products } from '../Screens/Products/Products'
import { Contact} from '../Screens/Contact/Contact'
import { Navbar } from '../Components/Navbar/Navbar'
import SingleProduct from '../Screens/SingleScreen/singleProduct';


export const RouterConfig = () => {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />} />
                <Route path='/products' element={<Products/>} />
                <Route path='/contact' element={<Contact />} />
                <Route path="/singleProduct" element={<SingleProduct />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
