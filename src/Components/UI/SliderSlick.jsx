import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
      ];
  return (
    <div style={{
        width: "200px",
        margin: "auto",
        marginTop: "20px",
        border : "1px solid black",
    }}>
        <Slider
            dots={false}
            slidesToShow={4}
            slidesToScroll={1}
        >
            {colors.map((color, index) => (
                <div
                    key={index}
                    style={{
                        backgroundColor: "white",
                        width: "100px",
                        height: "100px",
                        margin: "10px",
                        border: "1px solid white",
                     }}
                >
                    {color}
                </div>
            ))}
        </Slider>
    </div>
  )
}

export default SliderSlick