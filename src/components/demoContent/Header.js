import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import logo from '../../Jesto Images/jesto white.png';

function Header() {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("header nav");
    const body = document.body;

    const toggleMenu = () => {
      hamburger.classList.toggle("active");
      nav.classList.toggle("active");
      body.classList.toggle("menu-open");
    };

    const closeMenu = () => {
      hamburger.classList.remove("active");
      nav.classList.remove("active");
      body.classList.remove("menu-open");
    };

    hamburger.addEventListener("click", toggleMenu);

    return () => {
      hamburger.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Jesto Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/auth" className="log-in" onClick={() => document.body.classList.remove("menu-open")}>Log In</Link></li>
          <li><Link to="/auth" className="SignUp" onClick={() => document.body.classList.remove("menu-open")}>Sign Up</Link></li>
        </ul>
      </nav>  
      <div className="hamburger" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Header;


