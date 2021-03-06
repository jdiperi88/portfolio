import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    let { navIsOpen, active, openNav, closeNav } = this.props;
    return (
      <header className="flex navbar">
        <div
          className={`${navIsOpen}`}
          id="nav-icon"
          onClick={() => {
            openNav();
          }}
        >
          <div id="list-lines">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={`nav-menu  ${active}`}>
          <Link to="/">
            <li className="header-about" onClick={() => closeNav()}>
              About
            </li>
          </Link>
          <Link to="/Projects">
            <li className="header-projects" onClick={() => closeNav()}>
              Projects
            </li>
          </Link>
          <Link to="/Contact">
            <li className="header-contact" onClick={() => closeNav()}>
              Contact
            </li>
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
