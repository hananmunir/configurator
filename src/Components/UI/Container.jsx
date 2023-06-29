import React from "react";
import "./index.css";
import SliderComponent from "./SliderComponent";
import SliderSlick from "./SliderSlick";
import ServicesComponent from "./ServicesComponent";

export default function Container() {
  return (
    <div className='container'>
      <div className='container__header'></div>
      <div className='container__body'>
        <div className='container__body__left'>
          <SliderSlick type='color' />
          <SliderSlick type='surface' />
          <SliderSlick type='topcoat' />
        </div>
        <div className='container__body__right'>
          <SliderComponent/>
          <SliderComponent/>
          <SliderComponent/>
          <SliderComponent/>
          <ServicesComponent/>
          <ServicesComponent/>
          <ServicesComponent/>
          <ServicesComponent/>
        </div>
      </div>
      <div className='container__footer'></div>
    </div>
  );
}
