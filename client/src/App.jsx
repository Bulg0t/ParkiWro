import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Index from './pages/Index';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Single from './pages/single';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import AssignBadge from './pages/AssignBadge';
import UserBadges from './pages/UserBadges';
import Ranking from './pages/Ranking';  // Importujemy nowy komponent

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Index />} />
        <Route path='/parks' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/single' element={<Single />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/odznaki' element={<UserBadges />} />
        <Route path='/assign-badge' element={<AssignBadge />} />
        <Route path='/ranking' element={<Ranking />} />  // Nowa trasa
      </Routes>
    </BrowserRouter>
  );
}

export default App;
