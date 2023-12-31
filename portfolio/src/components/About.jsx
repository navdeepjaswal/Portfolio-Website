import React from 'react'

function About() {
    return (
        <>
            <div className='about-container bg-[#ff5500] text-white'>

                <div className='flex flex-row justify-evenly items-center w-[75%] mx-auto text-montserrat'>
                    <h1 className='font-p text-[2.5em] font-extrabold underline' style={{ textDecorationColor: 'gold', textUnderlineOffset: '15px'}}>About</h1>

                    <div className='about-text flex flex-col max-w-md'>
                        <div className='title mb-8'>
                            <h2 className='font-p font-bold'>Hello, nice to meet you! Take a look around, my nigga. 🫱🏽‍🫲🏿😁</h2>
                        </div>

                        <div className='description'>
                            <h2 className='font-t font-extralight text-lg max-w-xs'>I am the best there is, ya heeeerd? A jobless nigga ova here... #TeamDegenerate... REPRESENT! 🤘🏽🤡🤘🏽</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* waves */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"><path fill="#ff5500" fill-opacity="1" d="M0,160L60,170.7C120,181,240,203,360,208C480,213,600,203,720,165.3C840,128,960,64,1080,37.3C1200,11,1320,21,1380,26.7L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
       </>
    )
}

export default About