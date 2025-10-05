import React from "react";
import PropTypes from 'prop-types'; // ES6

const Intro = () => {
  return (
    <div className='flex w-screen h-screen '>

      {/*Title*/}
      <div className='flex gap-10 w-full flex-col items-center justify-center '>
          <h1 className='font-semibold text-3xl md:text-[5em] md:leading-30 xl:text-[13em] xl:leading-65' >
        page 1
          </h1>
      </div>
     
    </div>
  );
};


export default Intro;
