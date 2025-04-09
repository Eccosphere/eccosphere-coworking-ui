"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./EccoLayout.module.css";
import EccoFooter from "../EccoFooter/EccoFooter";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";

const EccoLayout = ({ children }) => {
  const router = useRouter();
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      setIsHome(router.pathname === "/");
    }
  }, [router.isReady, router.pathname]);

  return (
    <div className={styles["ecco-layout"]}>
      <div className={styles["ecco-header"]}>
        <Navbar />
      </div>

      <div className={styles["ecco-layout-container"]}>
        {isHome ? children : <div className={styles["layout"]}>{children}</div>}
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
