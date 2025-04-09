import React from "react";
import styles from "./GoogleAdsForm.module.css";
import PropTypes from "prop-types";
import CloseIcon from "../../assets/iconSvg/close.svg";
import LogoSVG from "../../assets/logo/ecco_logo.png";
import Image from "next/image";

const GoogleAdsForm = ({
  className,
  heading,
  setOpenModal,
  iframeClass,
  icon,
}) => {
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div className={`${styles.iframeContainer} ${className}`}>
      <div className={`w-100 d-flex ${styles.headerContainer}`}>
        <div className={styles.headingWrapper}>
          <Image src={LogoSVG} alt="eccosphere-logo" className={styles.logo} />
          <h2 className={styles.headingText}>{heading}</h2>
        </div>
        {icon && (
          <button className={styles.btnClose} onClick={handleClose}>
            <Image
              src={CloseIcon}
              alt="close-icon"
              className={styles.closeIcon}
            />
          </button>
        )}
      </div>
      <iframe
        title="Google Ads Form"
        aria-label="Google Ads"
        frameBorder="0"
        className={`${styles.iframe} ${iframeClass}`}
        src="https://forms.zohopublic.in/eccosphere/form/GoogleAds/formperma/hMd2RMdI15dhheK5KlZg-0GriK870jjSoT4_OAFFNfY"
      />
    </div>
  );
};

GoogleAdsForm.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string.isRequired,
  setOpenModal: PropTypes.func.isRequired,
  iframeClass: PropTypes.string,
  icon: PropTypes.bool,
};

export default GoogleAdsForm;
