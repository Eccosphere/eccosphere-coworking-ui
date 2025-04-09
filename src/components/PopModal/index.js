import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./style.module.css";
import PropTypes from "prop-types";

const PopModal = (props) => {
  const { children, onClose, isOpen, size, className } = props;
  const [modalRoot, setModalRoot] = useState(null);

  const sizeClass = size || "sm";

  useEffect(() => {
    let root = document.getElementById("modal-root");

    if (!root) {
      root = document.createElement("div");
      root.id = "modal-root";
      document.body.appendChild(root);
    }

    setModalRoot(root);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className={`${styles["pop-modal"]}`} onClick={onClose}>
      <div
        className={`${styles["pop-modal-div"]}  ${styles[sizeClass]} ${className}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>,
    modalRoot
  );
};

PopModal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  size: PropTypes.string,
  className: PropTypes.string,
};

export default PopModal;
