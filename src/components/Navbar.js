import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import  styles from '../styles/Navbar.module.css';

function Navbar() {
    // adding the states
    const [isActive, setIsActive] = useState(false);
    //add the active class
    const toggleActiveClass = () => {
      setIsActive(!isActive);
    };
    //clean up function to remove the active class
    const removeActive = () => {
      setIsActive(false)
    }
    return (
      <div className="App">
        <header className="App-header">
          <nav className={`${styles.navbar}`}>
            {/* logo */}
            <Link to="/" className={`${styles.logo}`}></Link>
            <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
            <Link to="/" className={`${styles.navLink}`}>Home</Link>
          </li>
          <li onClick={removeActive}>
            <Link to="/menu" className={`${styles.navLink}`}>About</Link>
          </li>
          <li onClick={removeActive}>
            <Link to="/about" className={`${styles.navLink}`}>Projects</Link>
          </li>
          <li onClick={removeActive}>
            <Link to="/reservations" className={`${styles.navLink}`}>Contact</Link>
          </li>
            </ul>
            <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
            </div>
          </nav>
        </header>
      </div>
    );
  }
  export default Navbar;
  ;