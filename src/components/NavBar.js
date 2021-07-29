import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import LogoName from "../assets/shoe name.png";
function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div style={{ display: "flex" }}>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img
              style={{
                display: "block",
                width: "90%",
                justifySelf: "center",
                alignSelf: "center",
              }}
              src={LogoName}
              alt=""
            />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <div
              className="nav-items"
              styles={{ height: "80%", overflowY: "scroll" }}
            >
              <li className="nav-item">
                <NavLink
                  exact
                  to="/about"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Бидний тухай
                </NavLink>
              </li>{" "}
              <li className="nav-item">
                <NavLink
                  exact
                  to="/brands"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Манай брэндүүд
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
              </li>{" "}
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
              {/*   <li className="nav-item">
                <NavLink
                  exact
                  to="/popular"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Онцлох загвар
                </NavLink>
            </li>*/}
              <li className="nav-item">
                <NavLink
                  exact
                  to="/partners"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Хамтын ажиллагаа
                </NavLink>
              </li>{" "}
              <li className="nav-item">
                <a
                  href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__QEmqalURVlLN09ZSzZIWjRQSTNaOFoyWEFVWVMxVS4u&fbclid=IwAR1RP1KUk5lV02CJQKHYzIBhZv-JHomfKLrBpN4QxPxL6SWUyur8sTYqATs"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Төлбөр буцаах хүсэлт
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__QEmqalUQkZLME9IQ0QyTDFVRDRLVEZHUVJIWExYQS4u&fbclid=IwAR3bG7ZtsK_H9C8r6awUxoZgMrxZlUD8GYHgfc5QaLCpMGRPbTN7z5C6yWI"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Санал хүсэлт
                </a>
              </li>
              {/*
              <li className="nav-item">
                <NavLink
                  exact
                  to="/contact"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Бидэнтэй холбогдох
                </NavLink>
              </li>*/}
            </div>
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
    </div>
  );
}

export default NavBar;
