import React from 'react'
import Product from './Product'
import Main from './Main'
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='Product' element={ <div style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQRfP6YA5KdZV9fSzYatqzfbN5MVNJel9QjQ&usqp=CAU)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '98vh' }}>
        <Product />
      </div>}></Route>
      </Routes>
          </BrowserRouter>
    </>
  )
}

export default App



