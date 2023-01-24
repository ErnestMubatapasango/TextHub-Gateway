import React from 'react'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup" 
import Dashboard from './pages/Dashboard'
import Customer from './views/Customer';
import Sender from './views/Sender';
import Group from './views/Group'
import BulkSMS from './views/BulkSMS';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'


//Routes help with keeping track of the currently displayed component 
//Route helps us with navigating between components by pointing to particular component using the path prop

export default function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </Router>
  )
}
 /*   <Route path='/dashboard/customer' element={<Customer/>}/>
        <Route path='/dashboard/group' element={<Group/>}/>
        <Route path='/dashboard/sender' element={<Sender/>}/>
        <Route path='/dashboard/bulksms' element={<BulkSMS/>}/>
      <Route path='/dashboard' element={<Dashboard/>}> */