import React from "react";
import PropTypes from 'prop-types'; // ES6

const SectionOne = () => {
  return (
    <div className="w-screen h-screen">
      {/* Introduction */}
 
      <div className='flex w-full flex-col items-center pt-20 '>
          <h1 className='font-semibold text-3xl md:text-[8em] md:leading-50 xl:text-[13em] xl:leading-65' >
            Donut 3D
          </h1>
          <p className="text-lg font-mono -mt-5">
          Mon tout premier rendu 3D — simple, sucré, et un peu chaotique 
          </p>
      </div>
    
    </div>
  );
};


export default SectionOne;
