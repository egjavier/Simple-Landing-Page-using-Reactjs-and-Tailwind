import React from 'react'
import Typed from 'typed.js'

function Hero() {
  
  const el = React.useRef(null)
  
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['BTB', 'BTC', 'SAAS'],
      typeSpeed: 120,
      backSpeed: 140,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      typed.destroy();
    };
  }, [])

  return (
    <div className='text-white'>
      <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='m:text-7xl sm:text-6xl text-4xl font-bold md:py-2'>Grow with data.</h1>
        <div className='flex justify-center items-center'>
           <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, Flexible financing for </p>
           <span ref={el} className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'/>
        </div>
        <p className='md:2xl text-xl font-bold text-gray-500'>
          Monitor your data analytics to increae revenue for BTB, BTC, &SASS platforms
        </p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Hero