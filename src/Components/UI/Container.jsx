import React from "react";
import "./index.css";
import SliderComponent from "./SliderComponent";
import SliderSlick from "./SliderSlick";
import { OptionsSet2 } from "../../Constants/data";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
export default function Container() {
  const [eye, setEye] = React.useState(true);

  const handleClick = () => {
    setEye((prev) => !prev);
    console.log("here");
  };
  return (
    <div className='container'>
      <div className='container-header'></div>
      <div className='container-body'>
        <div className='container-body-left'>
          <SliderSlick type='color' />
          <SliderSlick type='surface' />
          <SliderSlick type='topcoat' />
        </div>
        <div className='container-body-center'>
          <div className='eye-icon-container'>
            {eye ? (
              <IoMdEye
                style={{ cursor: "pointer", zIndex: 5 }}
                onClick={handleClick}
                size={25}
                color={"#fff"}
              />
            ) : (
              <IoMdEyeOff
                style={{ cursor: "pointer", zIndex: 5 }}
                onClick={handleClick}
                size={25}
                color={"#fff"}
              />
            )}
          </div>
        </div>
        <div className='container-body-right'>
          {OptionsSet2.map((data, index) => (
            <SliderComponent key={index} data={data} />
          ))}
        </div>
      </div>
      <div className='container-footer'></div>
    </div>
  );
}
