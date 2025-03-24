import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlideshow = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="outline-none">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

ImageSlideshow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageSlideshow;