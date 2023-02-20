import React from 'react';
import banner from '../images/banner.png'
import MovingComponent from 'react-moving-text'

const Banner = () => {

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
    <img
      src={banner}
      alt="Banner"
      className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
    />
    <svg
      viewBox="0 0 1097 845"
      aria-hidden="true"
      className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
    >
      <path
        fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)"
        fillOpacity=".2"
        d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
      />
      <defs>
        <linearGradient
          id="10724532-9d81-43d2-bb94-866e98dd6e42"
          x1="1097.04"
          x2="-141.165"
          y1=".22"
          y2="363.075"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#776FFF" />
          <stop offset={1} stopColor="#FF4694" />
        </linearGradient>
      </defs>
    </svg>
    <svg
      viewBox="0 0 1097 845"
      aria-hidden="true"
      className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
    >
      <path
        fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)"
        fillOpacity=".2"
        d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
      />
      <defs>
        <linearGradient
          id="8ddc7edb-8983-4cd7-bccb-79ad21097d70"
          x1="1097.04"
          x2="-141.165"
          y1=".22"
          y2="363.075"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#776FFF" />
          <stop offset={1} stopColor="#FF4694" />
        </linearGradient>
      </defs>
    </svg>
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto lg:mx-0">
        <MovingComponent
          type="bounce"
          duration="10000ms"
          delay="5s"
          direction="normal"
          timing="ease"
          iteration="2"
          fillMode="both">
          <p style={{
            fontFamily: "Lobster-Regular",
            color: '#4d1d95',
            fontSize: '3em'
          }}>Lina F. Chaparro Nonsoque</p>
          <br/>
          <p style={{
            fontFamily: "Lobster-Regular",
            color: '#4d1d95',
            fontSize: '3em'
          }}>202127694</p>
          <br/>
          <p style={{
            fontFamily: "Lobster-Regular",
            color: '#4d1d95',
            fontSize: '3em'
          }}>Lic. en Ciencias Naturales y Educación Ambiental</p>
        </MovingComponent>
      </div>
    </div>
  </div>
  );
};

export default Banner;