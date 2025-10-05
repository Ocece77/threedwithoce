import React from "react";


const Intro = () => {

  return (
    <div className='flex w-screen h-screen '>

      {/*Title*/}
      <div className='flex w-full flex-col items-center pt-20'>
          <h1 className='font-semibold text-§xl md:text-[10em] md:leading-30 xl:text-[13em] xl:leading-65' >
            Hey
          </h1>
      </div>

      {/*paragraph*/}
      <div className=" flex justify-end items-end h-full p-20">
        
        <p className="text-lg font-mono">
          Petit site pour montrer mes petits projet imparfait <strong>3D</strong> et devs<br />
          Une vitrine de ce que j’apprends, ce que je teste, et ce que j'ai créer ✨
        </p>
      </div>
     
    </div>
  );
};


export default Intro;
