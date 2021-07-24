import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            CodeBucks
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Бидний тухай
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                href="https://shoegallery.mn/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                style={{ fontWeight: "bold" }}
              >
                Онлайн дэлгүүрээр зочлох
              </a>
            </li>
            <NavLink
              exact
              to="/brans"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Манай брэндүүд
            </NavLink>

            <li className="nav-item">
              <a
                href="https://shoegallery.mn/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Хамтын ажиллагаа
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://shoegallery.mn/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Санал хүсэлт
              </a>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/location"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Дэлгүүрийн хаяг
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Бидэнтэй холбогдох
              </NavLink>
            </li>
          </ul>
          <div style={{ width: "60px", height: "60px" }}>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
