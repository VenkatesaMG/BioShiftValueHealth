import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from '../components/main_page.jsx'
import SignUp from '../components/signup.jsx'
import Login from '../components/login.jsx'

function App() {

  return (
    <div style={{height: '100%'}}>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<MainPage />}></Route>
        <Route path = '/login' element={<Login/>}></Route>
        <Route path = '/signup' element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
