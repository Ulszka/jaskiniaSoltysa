import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Info from './pages/Info/Info';
import Faq from './pages/Faq/Faq';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';

export default function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}