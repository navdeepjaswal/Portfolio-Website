import React from 'react'
import heroImg from '../assets/hero-img.png'

function Home() {
  return (
    <>
      <div className='home w-full h-1/2 '>

        {/* Hero Text and image*/}
        <div className='flex flex-row justify-evenly items-center w-[75%] mx-auto h-[50%] p-8 mt-12'>
          <div className='hero-text'>
            <p className='font-t font-light text-[.75em] text-black italic'>Hello! My name is</p>
            <h1 className='name text-[2.5em] text-[#ff5500] font-p font-bold'>Navdeep Jaswal</h1>
            <h2 className='font-t font-semibold text-black pb-8'>I'm a Full-Stack Developer</h2>
            <p className='font-t font-light text-[.75em] text-black max-w-[27rem] pb-3'>Experienced developer with four years of expertise in designing,
              developing, and implementing web applications.
            </p>
            <p className='font-t font-light text-[.75em] text-black max-w-[25rem]'>
              Focused on building breathtaking responsive Full-Stack Web
              Applications.
            </p>
          </div>

          <div>
            <img src={heroImg} className='w-96' alt="hero-img" />
          </div>
        </div>
      </div>
      
      {/* svg curve image */}
      <svg className='relative top-1 z-[-1]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 270">
        <path fill="#ff5500" fillOpacity="1" d="M0,160L60,186.7C120,213,240,267,360,240C480,213,600,107,720,80C840,53,960,107,1080,106.7C1200,107,1320,53,1380,26.7L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>

    </>
  )
}

export default Home