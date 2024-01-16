import React from 'react'
import standing from '../assets/standing.png'
import ActionAreaCard from './ActionAreaCard'

function Portfolio() {

    const projects = [
        {
            'name': 'Metro-Fitness',
            'description': 'Metro Fitness is a web-based dashboard. It allows users to track calories, weight, meals, and exercises for the day. It also consists of an easy onboarding process that calculates the best calorie intake for the user.',
            'url': 'https://github.com/navdeepjaswal/Metro-Fitness'
        },
        {
            'name': 'HW Tracker',
            'description': 'Homework Tracker simplifies homework planning with an easy-to-use interface. Manage your tasks, organize with sorting capability, and effortlessly edit and delete entries.',
            'url': 'https://github.com/navdeepjaswal/Homework-Tracker'
        },
        {
            'name': 'Weather App',
            'description': 'The Weather App enables users to input any location format (country, state, city, zip) and receive concise, accurate weather information. Its a user-friendly tool for effortless access to current weather updates.',
            'url': 'https://github.com/navdeepjaswal/Weather-App'
        }
    ]
    return (
        <>
            <div className='portfolio'>
                <h1 className='text-[1.3em] 2xsm:text-[2.5em] text-[#ff5500] font-p font-bold mx-auto w-fit pb-5'>Portfolio</h1>
                <div className='flex flex-col-reverse items-start md:items-center md:flex-row w-[75%] lg:mx-auto justify-around'>

                    <section className='flex-shrink-0 w-[250px]'>
                        <img src={standing} className='w-full' alt="standing-img" />
                    </section>



                    <div className='flex flex-col md:flex-row justify-evenly items-center mx-auto'>
                        {projects.map((project, index) => (<ActionAreaCard project={project} key={index} />))}
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
                <path fill="#ff5500" fillOpacity="1" d="M0,160L40,154.7C80,149,160,139,240,122.7C320,107,400,85,480,96C560,107,640,149,720,144C800,139,880,85,960,85.3C1040,85,1120,139,1200,149.3C1280,160,1360,128,1400,112L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
            </svg>
        </>
    )
}

export default Portfolio