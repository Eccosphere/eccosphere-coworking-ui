import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-bootstrap";
import styles from "./style.module.css";
import { imageGallery } from "./config/homeData";
import MembershipPlan from "./component/MembershipPlan/MembershipPlan";
import WhyChooseUsHome from "./component/WhyChooseUsHome/WhyChooseUsHome";
import OurWorkspaces from "./component/OurWorkspaces/OurWorkspaces";
import CommunityTestimonials from "./component/CommunityTestimonials/CommunityTestimonials";
import HomeContent from "./component/HomeContent/HomeContent";
import Amenities from "./component/Amenities/Amenities";
import PopModal from "../../components/PopModal";
import GoogleAdsForm from "../../components/GoogleAdsForm/GoogleAdsForm";

const Home = (props) => {
  const { setTitle } = props;
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setTitle("Eccosphere The Coworking Sanctuary");
  }, [setTitle]);

  useEffect(() => {
    setOpenModal(true);
  }, []);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="w-100">
      <div className={styles["image-container"]}>
        <Carousel
          className="w-100 h-70"
          slide={false}
          indicators={false}
          controls={false}
          pause="hover"
        >
          {imageGallery.map((img) => (
            <Carousel.Item className={"h-100"} key={img.id}>
              <img
                src={img.src}
                alt={`space-img-${img.id}`}
                className={styles["space-img"]}
              />
            </Carousel.Item>
          ))}
          <div className={styles["header-div"]}>
            <div className={styles["text-div"]}>
              <h1 className={styles["heading-text"]}>
                Community, creativity, comfort & more
              </h1>
              <button className={styles["btn"]} onClick={handleOpenModal}>
                Contact Us
              </button>
            </div>
          </div>
        </Carousel>
      </div>

      <div className={styles["home"]}>
        <div className={styles["home-container"]}>
          <h1 className={styles["header-text"]}>
            Welcome to the Future of Workspaces
          </h1>
        </div>

        <div className={styles["home-container"]}>
          <HomeContent />
        </div>
        <div className={styles["home-container"]}>
          <WhyChooseUsHome />
        </div>
        <div className={styles["home-container"]}>
          <OurWorkspaces />
        </div>
        <div className={styles["home-container"]}>
          <MembershipPlan />
        </div>
        <div className={styles["amenities-container"]}>
          <Amenities />
        </div>
        <div className={styles["home-container"]}>
          <CommunityTestimonials />
        </div>
      </div>
      <PopModal
        isOpen={openModal}
        onClose={handleCloseModal}
        size={"lg"}
        className={styles["modal"]}
      >
        <GoogleAdsForm
          className={styles["google-ads"]}
          heading={"Book a Tour"}
        />
      </PopModal>
    </div>
  );
};

export default Home;

Home.propTypes = {
  setTitle: PropTypes.func.isRequired,
};
