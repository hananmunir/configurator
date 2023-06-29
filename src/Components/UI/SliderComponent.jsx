import React, { useState } from "react";
import "./SliderComponent.css";
import useColorStore from "../../Utils/store";

const SliderComponent = () => {
  const Materials = [
    "Alloy",
    "Aluminum",
    "Brass",
    "Bronze",
    "Copper",
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const materialsPerPage = 1;

  const totalPages = Math.ceil(Materials.length / materialsPerPage);

  const handlePrev = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? totalPages - 1 : prevPage - 1
    );
  };

  const handleNext = () => {
    setCurrentPage((prevPage) =>
      prevPage === totalPages - 1 ? 0 : prevPage + 1
    );
  };

  const startIndex = currentPage * materialsPerPage;
  const displayedMaterials = Materials.slice(
    startIndex,
    startIndex + materialsPerPage
  );

  return (
    <div className='slider-container'>
      <div className='slider-color'>Main Color</div>
      <div className='slider'>
        <button onClick={handlePrev} className='arrow-button' style={{
          transform: "translateX(-20px)",
        }}>
          &lt;
        </button>
        <div className='color-container'>
          {displayedMaterials.map((mat, index) => (
            <div key={index} className='material'>
              {mat}
            </div>
          ))}
        </div>
        <button onClick={handleNext} className='arrow-button' style={{
          transform: "translateX(20px)",
        }}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default SliderComponent;
