import React from 'react'
import { PiSmileyWinkFill } from "react-icons/pi";
import { BsStars } from "react-icons/bs";

function About() {
    return (
        <>
            <div className='about bg-[#ff5500] text-white'>

                <div className='flex sm:flex-row flex-col justify-evenly items-center w-[75%] mx-auto text-montserrat'>
                    <h1 className='font-p pb-5 text-[1.3em] 2xsm:text-[2.5em] font-extrabold underline sm:pb-3' style={{ textDecorationColor: 'gold', textUnderlineOffset: '15px'}}>About</h1>

                    <div className='about-text flex flex-col max-w-md text-center'>
                        <div className='title mb-6'>
                            <h2 className='font-p font-bold text-[.8em] pb-5 2xsm:text-[1.3em]'>Hello, nice to meet you! <PiSmileyWinkFill className='inline' color='gold'/></h2>
                        </div>

                        <div className='description text-center flex flex-col items-center'>
                            <h2 className='font-t font-light xsm:font-light max-w-xs text-[.6em] pb-5 2xsm:text-[.65em]'>
                            I am a Full-Stack Developer experienced in building beautiful and responsive websites. </h2>
                            <h2 className='font-t font-light xsm:font-light max-w-xs py-2 sm:py-4 text-[.6em] pb-5 2xsm:text-[.65em]'> 
                            My expertise extends to both front-end and back-end development, allowing me to create 
                            stunning and seamless online experiences. <BsStars className='inline text-lg' color='gold'/></h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* waves */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"><path fill="#ff5500" fillOpacity="1" d="M0,160L60,170.7C120,181,240,203,360,208C480,213,600,203,720,165.3C840,128,960,64,1080,37.3C1200,11,1320,21,1380,26.7L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
       </>
    )
}

export default About