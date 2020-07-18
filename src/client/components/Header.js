import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuToggle] = useState(false);

  const toggleMenu = () => setMenuToggle(!menuOpen);

  const stylesOpen = {
    transform: 'translateX(0px)'
  };
  return (
    <div className="navbar-fixed">
      <nav className="black">
        <div className="container">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              yourdailynews.com
            </a>
            <a href="javascript:void(0)" onClick={toggleMenu} className="sidenav-trigger right">
              <i className="material-icons">menu</i>
            </a>
            <div
              className="sidenav-overlay"
              style={menuOpen ? { display: 'block', opacity: 1 } : null}
              onClick={toggleMenu}
            />
            <ul id="slide-out" className="sidenav" style={menuOpen ? stylesOpen : null}>
              <li>
                <a className="subheader">Menu</a>
              </li>
              <li>
                <div className="divider" />
              </li>
              <li>
                <Link to="/" className="item" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/articles/the-times-of-india" className="item" onClick={toggleMenu}>
                  TOI
                </Link>
              </li>
              <li>
                <Link to="/articles/google-news" className="item" onClick={toggleMenu}>
                  Google News
                </Link>
              </li>
              <li>
                <Link to="/articles/cnn" className="item" onClick={toggleMenu}>
                  CNN
                </Link>
              </li>
            </ul>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
              <Link to="/articles/the-times-of-india" className="item" >
                  TOI
                </Link>
              </li>
              <li>
                <Link to="/articles/google-news" className="item">
                  Google News
                </Link>
              </li>
              <li>
                <Link to="/articles/cnn" className="item">
                  CNN
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
