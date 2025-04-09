import React from "react";
import styles from "./GoogleAdsForm.module.css";
import PropTypes from "prop-types";

const GoogleAdsForm = ({ className, heading }) => {
  return (
    <div className={`${styles.iframeContainer} ${className}`}>
      <h2 className={styles.headingText}>{heading}</h2>
      <iframe
        title="Google Ads Form"
        aria-label="Google Ads"
        frameBorder="0"
        className={styles.iframe}
        src="https://forms.zohopublic.in/eccosphere/form/GoogleAds/formperma/hMd2RMdI15dhheK5KlZg-0GriK870jjSoT4_OAFFNfY"
      />
    </div>
  );
};

GoogleAdsForm.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string.isRequired,
};

export default GoogleAdsForm;
