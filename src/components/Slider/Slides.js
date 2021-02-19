import Carousel from "nuka-carousel";
import PropTypes from "prop-types";
import React from "react";
import Slide from "./Slide";
import slugify from "slugify";

// --------------------------------------------------

const colorMap = (i, colors) => {
  if (i % 3 === 0) {
    return colors.tertiary;
  } else if (i % 2 === 0) {
    return colors.secondary;
  } else {
    return colors.primary;
  }
};

// --------------------------------------------------

const Slides = ({ sliderContents, mobile, GatsbyLink }) => {
  return (
    <Carousel
      autoplay
      wrapAround
      renderBottomCenterControls={null}
      slidesToShow={mobile ? 1 : 3}
    >
      {sliderContents.map((slide, i) => {
        return (
          <Slide
            GatsbyLink={GatsbyLink}
            key={`slider-slide-${slugify(slide.title, { lower: true })}`}
            colorCount={i + 1}
            slide={slide}
          />
        );
      })}
    </Carousel>
  );
};

Slides.propTypes = {
  GatsbyLink: PropTypes.any,
  mobile: PropTypes.bool,
  sliderContents: PropTypes.array,
  sliderSettings: PropTypes.object,
};

export default Slides;
