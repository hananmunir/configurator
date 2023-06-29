import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./SliderSlick.css";
import { colors, surface, topcoat } from "../../Constants/data";
import useColorStore from "../../Utils/store";

function SliderSlick({ type }) {
  const [state, setState] = useState(
    type === "color" ? colors : type === "surface" ? surface : topcoat
  );
  const changeColor = useColorStore((state) => state.changeColor);
  const selectedColor = useColorStore((state) => state.color);
  const handleColorClick = (color) => {
    if (type === "color") changeColor(color);
  };
  return (
    <div style={{ width: "60%", margin: "auto" }}>
      <span className='slider-color-title'>
        {type === "color"
          ? "Color"
          : type === "surface"
          ? "Surface"
          : "Top Coat"}
      </span>
      <Slider dots={false} slidesToShow={4} slidesToScroll={1} autoplay={false}>
        {state.map((color, index) => (
          <div
            className={`${color === selectedColor && "slick-slide-selected"}`}
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
          ? selectedColor
          : type === "surface"
          ? "Surface"
          : "Top Coat"}
      </span>
    </div>
  );
}

export default SliderSlick;
