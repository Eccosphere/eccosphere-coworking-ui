"use client";
import { useState } from "react";
import styles from "./Navbar.module.css";
import { navLinks } from "./config/NavigationList";
import logo from "../../assets/logo/2b04ed66-5266-462e-a866-ae810d7b4d2f.png";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const getNavList = (data) => {
    return data.map((item, index) => {
      return (
        <li key={index}>
          <Link
            className={styles["link"]}
            href={item.link}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {item.name}
          </Link>
        </li>
      );
    });
  };

  return (
    <div className={styles["navbar"]}>
      <div className={styles["logo-container"]}>
        <Link href={"/"}>
          <Image src={logo} alt="logo" className={styles["logo"]} />
        </Link>
      </div>
      <div className="w-90 div-space-end">
        <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          <ul className={styles["list"]}>{getNavList(navLinks)}</ul>
        </nav>
        <button
          className={styles["btn"]}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars className={styles["icon"]} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
