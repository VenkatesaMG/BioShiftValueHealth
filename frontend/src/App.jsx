import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from '../components/main_page.jsx'
import SignUp from '../components/signup.jsx'
import Login from '../components/login.jsx'
import User from '../components/userpage.jsx'
import Client from '../components/client_info.jsx'
function App() {
  const [toggle, setToggle] = useState(0)
  function handleToggle(){
    setToggle(prevState => !prevState)
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<MainPage />}></Route>
          <Route path = '/login' element={<Login/>}></Route>
          <Route path = '/signup' element={<SignUp />}></Route>
          <Route path = '/services' element={<Client handleToggle = {handleToggle} toggleState = {toggle} />}></Route>
          {/* <Route path = '/' element={<Client />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
