import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Hotel from './pages/Hotel';
import Restaurant from './pages/Restaurant';
import Meubles from './pages/Meubles';
import Seminaire from './pages/Seminaire';
import Tourisme from './pages/Tourisme';
import Contact from './pages/Contact';
import Galerie from './pages/Galerie';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/meubles" element={<Meubles />} />
          <Route path="/seminaire" element={<Seminaire />} />
          <Route path="/tourisme" element={<Tourisme />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
