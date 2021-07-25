import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import LogoName from "../assets/shoe name.png";
function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
          <img
            style={{
              display: "flex",
              width: "90%",
              justifySelf: "flex-start",
              alignSelf: "flex-start",
            }}
            src={LogoName}
            alt=""
          />
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              to="/about"
              className="nav-links"
              onClick={handleClick}
            >
              Бидний тухай
            </NavLink>
          </li>
          <li className="nav-item">
            <a
              href="https://shoegallery.mn/"
              className="nav-links"
              onClick={handleClick}
              style={{ fontWeight: "bold" }}
            >
              Онлайн дэлгүүрээр зочлох
            </a>
          </li>
          <NavLink
            exact
            to="/brands"
            className="nav-links"
            onClick={handleClick}
          >
            Манай брэндүүд
          </NavLink>

          <li className="nav-item">
            <a
              href="https://shoegallery.mn/"
              className="nav-links"
              onClick={handleClick}
            >
              Хамтын ажиллагаа
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://shoegallery.mn/"
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
              className="nav-links"
              onClick={handleClick}
            >
              Бидэнтэй холбогдох
            </NavLink>
          </li>
        </ul>
        <div
          style={{
            width: "70px",
            height: "70px",
          }}
        >
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
