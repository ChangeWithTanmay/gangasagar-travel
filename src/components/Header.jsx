import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import logo from '../assets/logo.svg'
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  // Toggle service dropdown on click
  const toggleServiceDropdown = () => {
    setServiceOpen(!serviceOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        
        {/* Logo */}
        <Link to="/" className="logo">
          <img src={logo} alt="Gangasagar Yatra" />
        </Link>

        {/* Navigation */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about-ganga-sagar" onClick={() => setMenuOpen(false)}>About</Link>

          {/* Services Dropdown - Click to toggle */}
          <div 
            className="dropdown"
            onClick={toggleServiceDropdown}
            
          >
            <div className="dropdown-title">
              <span>Services</span>
              <span className="dropdown-icon">
               {serviceOpen ? <FaChevronUp /> : <FaChevronDown />}
               </span>
            </div>
            {serviceOpen && (
              <div className="dropdown-menu">
                <Link to="/travel-guide" onClick={() => { setMenuOpen(false); setServiceOpen(false); }}>Travel Guide</Link>
                <Link to="/car-booking" onClick={() => { setMenuOpen(false); setServiceOpen(false); }}>Car Service</Link>
                <Link to="/veg-food-booking" onClick={() => { setMenuOpen(false); setServiceOpen(false); }}>Food Service</Link>
                <Link to="/hotel-booking" onClick={() => { setMenuOpen(false); setServiceOpen(false); }}>Hotel Booking</Link>
                <Link to="/boat-booking" onClick={() => { setMenuOpen(false); setServiceOpen(false); }}>Boat Booking</Link>
              </div>
            )}
          </div>

          <Link to="/tour-packages" onClick={() => setMenuOpen(false)}>Packages</Link>
          <Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
          <Link to="/contact" className="contact-btn" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>

        {/* Mobile Menu Button - Shows cross icon when open, hamburger when closed */}
        <button 
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
};

export default Header;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Header.css";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [serviceOpen, setServiceOpen] = useState(false);

//   return (
//     <header className="header">
//       <div className="header-container">
        
//         {/* Logo */}
//         <Link to="/" className="logo">
//           <img src="/logo.png" alt="Divine Travels" />
//           <span>Divine Travels</span>
//         </Link>

//         {/* Navigation */}
//         <nav className={`nav ${menuOpen ? "open" : ""}`}>
//           <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
//           <Link to="/about-ganga-sagar" onClick={() => setMenuOpen(false)}>About</Link>

//           {/* Services Dropdown */}
//           <div 
//             className="dropdown"
//             onMouseEnter={() => setServiceOpen(true)}
//             onMouseLeave={() => setServiceOpen(false)}
//           >
//             <span className="dropdown-title">Services</span>
//             {serviceOpen && (
//               <div className="dropdown-menu">
//                 <Link to="/travel-guide" onClick={() => setMenuOpen(false)}>Travel Guide</Link>
//                 <Link to="/car-booking" onClick={() => setMenuOpen(false)}>Car Service</Link>
//                 <Link to="/veg-food-booking" onClick={() => setMenuOpen(false)}>Food Service</Link>
//                 <Link to="/hotel-booking" onClick={() => setMenuOpen(false)}>Hotel Booking</Link>
//                 <Link to="/boat-booking" onClick={() => setMenuOpen(false)}>Boat Booking</Link>
//               </div>
//             )}
//           </div>

//           <Link to="/tour-packages">Packages</Link>
//           <Link to="/faq">FAQ</Link>
//           <Link to="/contact" className="contact-btn">Contact</Link>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button 
//           className="menu-toggle"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           ☰
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;




// // src/components/Header.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <header>
//       <div className="container">
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about-ganga-sagar">About Gangasagar</Link></li>
//             <li><Link to="/travel-guide">Travel Guide</Link></li>
//             <li><Link to="/car-booking">Car Service</Link></li>
//             <li><Link to="/veg-food-booking">Food Service</Link></li>
//             <li><Link to="/hotel-booking">Hotel Booking</Link></li>
//             <li><Link to="/boat-booking">Boat Booking</Link></li>
//             <li><Link to="/tour-packages">Packages</Link></li>
//             <li><Link to="/faq">FAQ</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
