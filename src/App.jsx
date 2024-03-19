
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './Componeents/Header'
import { Cart } from './Componeents/Cart'
import { Home } from './Componeents/Home'
import { createContext, useState } from 'react'
import { useContext } from 'react'

 export const cartContext =createContext();
function App() {
  
  const [cart, setcart] = useState([])
  return (
    
 <cartContext.Provider value={{cart,setcart}}>
  <BrowserRouter>
  <Header cart={cart}></Header>
  <div className="conatiner"><Routes >
    <Route path="/" element={<Home />}></Route>
    <Route path="/Cart" element={<Cart ></Cart>}></Route>
  </Routes>
 
  </div>
  </BrowserRouter>
 </cartContext.Provider>
  
  )
}

export default App
