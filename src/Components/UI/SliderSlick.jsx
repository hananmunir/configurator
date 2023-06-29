import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./SliderSlick.css";
import useColorStore from "../../Utils/store";

function SliderSlick() {
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "pink",
        "brown",
        "black",
        "white",
        "gray",
        "cyan",
      ];

      const changeColor = useColorStore((state) => state.changeColor);
      const handleColorClick = (color) => {
        changeColor(color);
      };
  return (
    <div style={{
        width: "200px",
        height: "200px",
        margin: "auto",
        marginTop: "20px",
        border: "1px solid black",
    }}>
        <div className='slider-color'>Main Color</div>
        <Slider
            dots={false}
            slidesToShow={3}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={3000}
        >
            {colors.map((color, index) => (
                <div
                    key={index}
                    className={`slick-slide ${color}`}
                    onClick={() => handleColorClick(color)}
                >
                </div>
            ))}
        </Slider>
    </div>
  )
}

export default SliderSlick