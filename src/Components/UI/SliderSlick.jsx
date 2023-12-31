import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./SliderSlick.css";
import { colors, surface, topcoat } from "../../Constants/data";
import useColorStore from "../../Utils/store";

function SliderSlick({ type, slidesToShow }) {
  const [state, setState] = useState(
    type === "color" ? colors : type === "surface" ? surface : topcoat
  );
  const { changeColor, selectedPart } = useColorStore();
  const selectedColor = useColorStore((state) => state.colors);
  const handleColorClick = (color) => {
    if (type === "color") changeColor(color);
  };
  return (
    <div style={{ width: "60%", margin: "auto" }}>
      <span className='slider-color-title'>
        {type === "color"
          ? "Main Color"
          : type === "surface"
          ? "Surface"
          : "Top Coat"}
      </span>
      <Slider
        dots={false}
        slidesToShow={slidesToShow}
        slidesToScroll={1}
        autoplay={false}
      >
        {state.map((color, index) => (
          <div
            className={`${
              color === selectedColor[selectedPart] && "slick-slide-selected"
            }`}
          >
            <div
              key={index}
              className={`slick-slide ${
                type === "color" ? color : "lightgray"
              }`}
              onClick={() => handleColorClick(color)}
            ></div>
          </div>
        ))}
      </Slider>
      <span className='slider-color-title'>
        {type === "color"
          ? selectedColor[selectedPart]
          : type === "surface"
          ? "Surface"
          : "Top Coat"}
      </span>
    </div>
  );
}

export default SliderSlick;
