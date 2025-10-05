import React from 'react'

const Hero = () => {
  return (
    <div className='flex w-screen h-screen'>

      {/*Title*/}
      <div className='flex gap-10 w-full flex-col items-center justify-center '>
          <h1 className='font-semibold text-8xl md:text-[10em] md:leading-30 xl:text-[23em] xl:leading-65' >
          3D
          <br/>
          DESIGN
          </h1>
          <p >by Océane KASINDU</p>    
      </div>
     
    </div>
  )
}

export default Hero
