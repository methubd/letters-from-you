import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Bars3Icon, BeakerIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header-container">

      <section className="header-section">
{/* Mobile Screen Toogle Menu */}
        <div className="title-section">
          <div className="toogle-menu-container" onClick={() => setIsOpen(!isOpen)}>

            <span>
              {isOpen === true ? (
                <XMarkIcon className="menu-icon"></XMarkIcon>
              ) : (
                <Bars3Icon className="menu-icon"></Bars3Icon>
             )}
            </span>
            
          </div>

          <Link className="company-name" to="/">
            <h3 className="brand-title">Letter's From You</h3>
          </Link>
{/* Navigation Bar */}
            <nav >
                <ul className={`${isOpen ? "show-menu" : "hide-menu"}`}>
                    <li><Link className="menu" to="/">Products</Link></li>
                    <li><Link className="menu" to="/pricing">Pricing</Link></li>
                    <li><Link className="menu" to="/company">Company</Link></li>
                    {/* <li><Link className="menu" to="/about">About</Link></li> */}
                </ul>
            </nav>
        </div>

        

        <div>
          <button className="btn-login">
            <Link className="menu" to="/login">
              Login
            </Link>
          </button>
        </div>
      </section>
      <section className="mobile-screen-menu">
        {/* <h3>Mobile Screen</h3> */}
      </section>
      {/* Banner Section */}
    </div>
  );
};

export default Navbar;
