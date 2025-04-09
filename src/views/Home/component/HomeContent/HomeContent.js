import React from "react";
import image from "../../../../assets/spaceImages/zen_garden.jpeg";
import "./HomeContent.css";

const HomeContent = () => {
  return (
    <div className="home-section">
      {/* Left Side - Text Content */}
      <div className="home-content">
        <h2 className="home-title">The Essence of home Philosophy</h2>
        <p className="home-text">
          The ambiance inside Eccosphere has been created using the Zen Buddhist
          philosophy. Such an ambiance is created by using plants, natural
          light, and manmade materials together and results in an environment
          that bestows calmness on the mind. Being surrounded by Zen Buddhist
          aesthetics allows people to work at their creative best and makes them
          as productive as they can possibly be.
        </p>
        <p className="home-text">
          Experience a tranquil environment where you can work with clarity,
          surrounded by inspiration.
        </p>
      </div>

      {/* Right Side - Image Cards */}
      <div className="home-images">
        <img src={image} alt="home Garden" className="home-img" />
      </div>
    </div>
  );
};

export default HomeContent;
