"use client";
import { useState } from "react";
import styles from "./Navbar.module.css";
import { navLinks } from "./config/NavigationList";
import logo from "../../assets/logo/eccosphere1.png";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openToggle, setOpenToggle] = useState(false);

  const getNavList = (data) => {
    return data.map((item, index) => {
      if (item.name !== "Services") {
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
      } else {
        return (
          <li key={index} className={styles.dropdownWrapper}>
            <button
              className={`${styles.dropdown} ${styles.link}`}
              onClick={() => setOpenToggle(!openToggle)}
            >
              {item.name}
            </button>
            {openToggle && (
              <ul className={styles.dropdownMenu}>
                {item.servicesLink.map((item, index) => (
                  <li className={styles.dropdownItem} key={index}>
                    <Link className={styles.link} href={item.link}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      }
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
