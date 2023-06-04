import React from 'react';
import { Routes , Route, Navigate } from 'react-router-dom';
import { Mainpage } from './pages/Mainpage';
import { Pricingpage } from './pages/Pricingpage';
import ScrollToTop from './utils/ScrollToTop';


function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
        <Route path="/" element={<Mainpage />}/>
        <Route path="/pricing" element={<Pricingpage />}/>
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
    </>
  );
}

export default App;
