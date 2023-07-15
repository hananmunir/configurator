import React, { useEffect, useState } from "react";
import "./SliderComponent.css";
import useColorStore from "../../Utils/store";

const SliderComponent = ({ data }) => {
  const [currentOption, setCurrentOption] = useState(0);
  const setSurface = useColorStore((state) => state.setSurface);
  const optionsPerSlide = 1;

  const handlePrev = () => {
    setCurrentOption((prevPage) =>
      prevPage === 0 ? data.options.length - 1 : prevPage - 1
    );
  };

  const handleNext = () => {
    setCurrentOption((prevPage) =>
      prevPage === data.options.length - 1 ? 0 : prevPage + 1
    );
  };

  useEffect(() => {
    setSurface(data.options[currentOption]);
  }, [currentOption]);

  return (
    <div className='slider-container'>
      <div className='slider-color'>{data.title}</div>
      <div className='slider'>
        <button
          onClick={handlePrev}
          className='arrow-button'
          style={{
            transform: "translateX(-20px)",
          }}
        >
          &lt;
        </button>
        <div className='color-container'>
          <span className='material'>{data.options[currentOption]}</span>
        </div>
        <button
          onClick={handleNext}
          className='arrow-button'
          style={{
            transform: "translateX(20px)",
          }}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default SliderComponent;
