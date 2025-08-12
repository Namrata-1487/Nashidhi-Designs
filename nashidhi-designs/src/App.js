import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AOS from 'aos';

import Header from './components/Pages/Header';
import Footer from './components/Pages/Footer';
import Home from './components/Pages/Home';
import Portfolio from './components/Pages/Portfolio';
import Services from './components/Pages/Services';
import Contact from './components/Pages/Contact';

function App() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="app-root">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
