import React from "react";
import Slider from "react-slick";
import "./Carousel.css"; // optional for custom styling
import image1 from "../../Assets/banner/banner.jpg";

const images = [image1, image1, image1, image1];

const AutoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`carousel-${index}`}
                className="carousel-image"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AutoCarousel;
