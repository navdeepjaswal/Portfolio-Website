import React from 'react'

function About() {
    return (
        <>
            <div className='about-container bg-[#ff5500] text-white h-[50vh]'>

                <div className='flex flex-row justify-evenly items-center w-[75%] mx-auto p-8 text-montserrat'>
                    <h1 className='text-[2.5em] font-extrabold' style={{ textDecorationColor: 'gold'}}>About</h1>

                    <div className='about-text flex flex-col max-w-md'>
                        <div className='title mb-8'>
                            <h2 className='font-bold'>Hello, nice to meet you! Take a look around, my nigga. 🫱🏽‍🫲🏿😁</h2>
                        </div>

                        <div className='description'>
                            <h2 className='font-[system-ui] font-light text-lg max-w-xs'>I am the best there is, ya heeeerd? A jobless nigga ova here... #TeamDegenerate... REPRESENT! 🤘🏽🤡🤘🏽</h2>
                        </div>
                    </div>
                </div>

                {/* blob */}
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='absolute w-[38%] top-[90%] z-0 left-[12%]'>
                    <path fill="#ffd70070" d="M40.5,-69.9C52.3,-63.3,61.4,-52.1,70.5,-39.6C79.6,-27.2,88.5,-13.6,89.3,0.5C90.1,14.5,82.8,29,73.2,40.6C63.7,52.2,51.9,60.9,39.3,66.7C26.8,72.4,13.4,75.2,1.8,72.1C-9.8,69.1,-19.7,60.1,-33.3,54.9C-46.9,49.8,-64.3,48.5,-68.5,40C-72.6,31.5,-63.5,15.7,-58.8,2.7C-54.1,-10.3,-53.8,-20.6,-49,-28C-44.2,-35.4,-34.9,-39.8,-26,-48.1C-17.1,-56.3,-8.5,-68.4,2.9,-73.4C14.4,-78.5,28.7,-76.6,40.5,-69.9Z" transform="translate(100 100)" />
                </svg>
            </div>

            {/* waves */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff5500" fill-opacity="1" d="M0,160L60,170.7C120,181,240,203,360,208C480,213,600,203,720,165.3C840,128,960,64,1080,37.3C1200,11,1320,21,1380,26.7L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
       </>
    )
}

export default About