import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/Header';
import { Home } from './pages/Home';
import  About  from './pages/About';
import Contact from './pages/Contact';
import Bill from './pages/Bill';
import Services from './pages/Services';
import Products from './pages/Products';

function App() {



  return (
    <BrowserRouter>
    <HeaderComponent />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="bill" element={<Bill />} />
    <Route path="services" element={<Services />} />
    <Route path="products" element={<Products />} />
    
    </Routes>
  </BrowserRouter>
  );
}

export default App;
