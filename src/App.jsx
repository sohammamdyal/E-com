import React from 'react'
import {BrowserRouter as Routers, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './componats/Header'
import Product from './pages/Product'
import Orders from './pages/Order'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import Signup from './pages/Signup'
import Login from './pages/SignIn'
import Dashboard from './pages/Dashboard' 

const App = () => {
  return (
    <>
   <Routers>
   <Header/>
   <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/products' element={<Product/>}/>
    <Route path='/orders' element={<Orders/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/product/:id' element={<ProductDetails/>}/>
    <Route path="/cart" element={<Cart />} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/signin' element={<Login/>} />
    <Route path='/dashboard' element={<Dashboard/>} />
  



  
   </Routes>
   
   </Routers>
    </>
  )
}

export default App