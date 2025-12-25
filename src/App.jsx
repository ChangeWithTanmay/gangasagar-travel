// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyButtons from './components/StickyButtons';
import Home from './pages/Home';
import AboutGangaSagar from './pages/AboutGangaSagar';
import TravelGuide from './pages/TravelGuide';
import CarBooking from './pages/CarBooking';
import VegFoodBooking from './pages/VegFoodBooking';
import HotelBooking from './pages/HotelBooking';
import BoatBooking from './pages/BoatBooking';
import TourPackages from './pages/TourPackages';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import RefundPolicy from './pages/RefundPolicy';
import FoodMenu from './pages/FoodMenu';

// React-Helmet
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Style
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Header />
          <StickyButtons />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-ganga-sagar" element={<AboutGangaSagar />} />
            <Route path="/travel-guide" element={<TravelGuide />} />
            <Route path="/car-booking" element={<CarBooking />} />
            <Route path="/veg-food-booking" element={<VegFoodBooking />} />
            <Route path="/hotel-booking" element={<HotelBooking />} />
            <Route path="/boat-booking" element={<BoatBooking />} />
            <Route path="/tour-packages" element={<TourPackages />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/food-menu" element={<FoodMenu />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;