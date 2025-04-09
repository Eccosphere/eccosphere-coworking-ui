import React from "react";
import styles from "./style.module.css";
import GoogleAdsForm from "../../components/GoogleAdsForm/GoogleAdsForm";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Get in touch with us.</p>
      </section>

      {/* Contact Info Section */}
      <section className={styles.contactInfo}>
        <div className={styles.infoBox}>
          <h3>📍 Our Location</h3>
          <p>B-70, Block B, Sector 67, Noida, Uttar Pradesh 201301</p>
        </div>
        <div className={styles.infoBox}>
          <h3>📞 Call Us</h3>
          <p>+918506054055</p>
        </div>
        <div className={styles.infoBox}>
          <h3>✉ Email Us</h3>
          <p>chandank@eccosphere.com</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={styles.contactForm}>
        <div className={styles.formContainer}>
          <GoogleAdsForm heading={"Request a Call Back"} iframeClass={styles.formHeight} />
        </div>
      </section>

      {/* Google Maps Section */}
      <section className={styles.mapSection}>
        <h2>Find Us Here</h2>
        <iframe
          title="Google Map of Eccosphere Coworking Pvt Ltd"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.750858747648!2d77.37880927528806!3d28.607250075678596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef0900cd7d65:0xfb53d8bb94645502!2sEccosphere Coworking Pvt Ltd!5e0!3m2!1sen!2sin!4v1740045653582!5m2!1sen!2sin"
          className={styles.map}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* Social Media Links */}
      <section className={styles.socialMedia}>
        <h3>Follow Us</h3>
        <div className={styles.socialIcons}>
          <a
            href="https://www.facebook.com/Eccosphere/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/eccospherecowork/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/eccosphere-coworking/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
