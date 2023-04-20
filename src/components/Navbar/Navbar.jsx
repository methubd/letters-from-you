import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Bars3Icon, BeakerIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user, logOut} = useContext(AuthContext);
  
  const handleLogOut = () => {
    logOut()
  }

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

        { user &&
          <p>Welcome: {user.email}</p>
        }

        <div>          
          { user ? 
            <div>
            <button className="btn-login"><Link to='/upload' className="menu">Upload Document</Link></button>
            <button onClick={handleLogOut} className="btn-login btn-logout"><Link className="menu">Logout</Link></button>
            </div> :
            <button className="btn-login"><Link className="menu" to="/login">Upload Document</Link></button>
          }
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
