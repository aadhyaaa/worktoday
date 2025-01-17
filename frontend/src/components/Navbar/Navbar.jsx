import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css";
import "./styles.css"
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        {/* MaidMyDay */}
        <img src={getImageUrl("images/logo.png")} alt="" />
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/close.png")
              : getImageUrl("nav/menu1.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li className="px-5 py-2 ullinav hover:bg-cyan-600 cursor-pointer rounded-xl transition-transform transform hover:scale-110">
            <a href="#">About</a>
          </li>
          <li className="px-5 py-2 ullinav hover:bg-cyan-600 cursor-pointer rounded-xl transition-transform transform hover:scale-110">
            <a href="#">Experience</a>
          </li>
          <li className="px-5 py-2 ullinav hover:bg-cyan-600 cursor-pointer rounded-xl transition-transform transform hover:scale-110">
            <a href="#">Projects</a>
          </li>
          <li className="px-5 py-2 ullinav hover:bg-cyan-600 cursor-pointer rounded-xl transition-transform transform hover:scale-110">
            {/* <a href="#about">Contact</a> */}
            <Link to="/signup">Signup</Link>
          </li>
          <li className="px-5 py-2 ullinav hover:bg-cyan-600 cursor-pointer rounded-xl transition-transform transform hover:scale-110">
            {/* <a href="#signup">Register</a> */}
            <Link to="/register">FirestoreDB</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
