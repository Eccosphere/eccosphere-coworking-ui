"use client";
import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./EccoLayout.module.css";
import EccoFooter from "../EccoFooter/EccoFooter";
import PropTypes from "prop-types";
import { usePathname } from "next/navigation";

const EccoLayout = ({ children }) => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className={styles["ecco-layout"]}>
      <div className={styles["ecco-header"]}>
        <Navbar />
      </div>

      <div className={styles["ecco-layout-container"]}>
        <div className={isHome ? "w-100" : styles["layout"]}>{children}</div>
      </div>

      <div className={styles["ecco-layout-footer"]}>
        <div className={styles["layout-footer"]}>
          <EccoFooter />
        </div>
      </div>
    </div>
  );
};

export default EccoLayout;

EccoLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
