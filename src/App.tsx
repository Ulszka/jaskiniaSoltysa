import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Info from './pages/Info';
import Faq from './pages/Faq';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

export default function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/informacje" element={<Info />} />
          <Route path="/pytania" element={<Faq />} />
          <Route path="/zdjecia" element={<Gallery />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}