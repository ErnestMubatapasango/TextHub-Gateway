import React from 'react'
import Home from "./pages/Home"
/* import Login from "./pages/Login"
import Signup from "./pages/Signup" */
import Dashboard from './pages/Dashboard'

import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'

//Routes help with keeping track of the currently displayed component 
//Route helps us with navigating between components by pointing to particular component using the path prop

export default function App() {
  return (
    <Router>
      <Routes>
      {/* <Route path='/Signup' element={<Signup/>}>
      </Route>
      <Route path='/login' element={<Login/>}>
      </Route> */}
      <Route path='/dashboard' element={<Dashboard/>}>
      </Route>
      <Route path='/' element={<Home/>}>
      </Route>
      </Routes>
    </Router>
  )
}
