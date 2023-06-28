import React, { useState } from 'react';
import './SliderComponent.css';

const SliderComponent = () => {
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'black', 'white'];
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null); // State to store the selected color
  const colorsPerPage = 5;

  const totalPages = Math.ceil(colors.length / colorsPerPage);

  const handlePrevious = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? totalPages - 1 : prevPage - 1
    );
  };

  const handleNext = () => {
    setCurrentPage((prevPage) =>
      prevPage === totalPages - 1 ? 0 : prevPage + 1
    );
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const startIndex = currentPage * colorsPerPage;
  const displayedColors = colors.slice(startIndex, startIndex + colorsPerPage);

  return (
    <div className='slider-container'>
        <div className='slider-color'>Main Color</div>
    <div className="slider">
      <button onClick={handlePrevious} className="arrow-button">&lt;</button>
      <div className="color-container">
        {displayedColors.map((color, index) => (
          <div
            key={index}
            className={`color-circle ${selectedColor === color ? 'selected' : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)}
          ></div>
        ))}
      </div>
      <button onClick={handleNext} className="arrow-button">&gt;</button>
    </div>
    {selectedColor && <div className="selected-color">{selectedColor}</div>}
    </div>
  );
};

export default SliderComponent;
