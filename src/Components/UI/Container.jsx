import React from "react";
import "./index.css";

export default function Container() {
  return (
    <div className='container'>
      <div className='container__header'></div>
      <div className='container__body'>
        <div className='container__body__left'></div>
        <div className='container__body__right'></div>
      </div>
      <div className='container__footer'></div>
    </div>
  );
}
