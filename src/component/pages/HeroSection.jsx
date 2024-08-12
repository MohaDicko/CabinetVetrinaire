import { Container } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../images/veto1.jpg";
import Image2 from "../images/veto2.jpg";
import Image3 from "../images/veto6.jpg";

function HeroSection() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Active l'autoplay
    autoplaySpeed: 3000, // Vitesse de l'autoplay (3000ms = 3s)
    fade: true, // Ajoute un effet de fondu entre les diapositives
    cssEase: "linear", // Assure une transition douce
  };

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Slider {...settings}>
        <div className="image-container">La santé de vos animaux est notre priorité.
          <img src={Image1} alt="Image1" />
          <h3>La santé de vos animaux est notre priorité.</h3>
        </div>
        <div className="image-container">
          <img src={Image2} alt="Image2" />
          <h3> S occuper des animaux, c est aimer sans limite. </h3>
        </div>
        <div className="image-container">
          <img src={Image3} alt="Image3" />
          <h3> Chaque patte compte. </h3>
        </div>
      </Slider>
    </div>
  );
}

export default HeroSection;
