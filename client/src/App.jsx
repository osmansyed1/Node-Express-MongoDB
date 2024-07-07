import React from 'react'
import Home from './Components/Home'
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Createuser from './Components/Createuser'
import User from './Components/User'
import Edit from './Components/Edit'
const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Home/>
     <Routes>
        <Route element={<Createuser/>} path='/'></Route>
        <Route element={<User/>} path='/user'></Route>
        <Route element={<Edit/>} path='/edit/:id'></Route>
     </Routes>
    
    </BrowserRouter>
    </div>
  )
}

export default App
