import { useState, Fragment } from 'react'
import Signup from './Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Index from './pages/Index'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Single from './pages/single'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import AssignBadge from './pages/AssignBadge'; 
import UserBadges from './pages/UserBadges'; 

function App() {
return (
<BrowserRouter>
<Routes>
  <Route path='/register' element={<Signup/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/home' element={<Index/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/odznaki' element={<Service/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  <Route path='/single' element={<Single/>}></Route>
  <Route path='/gallery' element={<Gallery/>}></Route>
  <Route path='/assign-badge' element={<AssignBadge/>}></Route>
  <Route path='/user-badges' element={<UserBadges/>}></Route> 
  {/* <Route path='/api/parks' element={<About/>}></Route> */}
  <Route path='/blog/' element={<Blog/>}></Route>




</Routes>
</BrowserRouter>
)
}
export default App;