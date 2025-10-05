import React from "react";
import PropTypes from 'prop-types'; // ES6

const SectionTwo = () => {
  return (
    <div className="w-screen h-screen">
      {/* Introduction */}
      <div className="flex flex-col justify-end items-end pr-20 h-full">
              <h1 className='font-semibold text-3xl md:text-[7em] md:leading-30 xl:text-[10em] xl:leading-30' >
              Pancake <br /> & Milshake
              </h1>
              <p className="text-lg">Textures, reflets, et crème virtuelle. Miam. 👩</p>
      </div>


    </div>
  );
};


export default SectionTwo;
