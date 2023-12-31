import React from 'react'
import standing from '../assets/standing.png'
import ActionAreaCard from './ActionAreaCard'

function Portfolio() {

    const projects = [
        {
            'name': 'Metro-Fitness',
            'description' : 'Metro Fitness is a web-based dashboard for all of your fitness needs. With the Metro-Fitness application, you can track your calories, weight, meals, and exercises for the day. Metro-fitness also consists of an easy onboarding process that calculates the best calorie intake for you!',
            'url': 'https://github.com/navdeepjaswal/Metro-Fitness'
        },
        {
            'name': 'Homework Tracker',
            'description' : 'Homework Tracker simplifies academic planning with an easy-to-use interface. Manage tasks effortlessly, organize with sorting options, and enjoy flexibility in editing and deleting entries. Its a casual project designed for efficient homework management.',            'url': 'https://github.com/navdeepjaswal/Homework-Tracker'
        },
        {
            'name': 'Weather Application',
            'description' : 'Metro Fitness is a web-based dashboard for all of your fitness needs. With the Metro-Fitness application, you can track your calories, weight, meals, and exercises for the day. Metro-fitness also consists of an easy onboarding process that calculates the best calorie intake for you!',
            'url': 'https://github.com/navdeepjaswal/Weather-App'
        }
    ]
    return (
        <>
            <div className='home-container w-full h-1/2 '>
                <h1 className='text-[2em] text-[#ff5500] font-p font-bold mx-auto w-fit pb-2'>Portfolio</h1>
                <div className='flex w-[75%] mx-auto items-center justify-around'>

                    <img src={standing} className='w-[26%]' alt="standing-img" />


                    <div className='flex flex-row justify-evenly items-center mx-auto'>
                        {projects.map( (project) => (<ActionAreaCard project={project}/>))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio