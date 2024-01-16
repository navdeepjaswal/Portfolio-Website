import React from 'react'
import ComputerIcon from '@mui/icons-material/Computer';
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { TbBrandMongodb } from "react-icons/tb";
import { SiSass } from "react-icons/si";

function Skills() {
  return (
    <>
      <div className='skills w-full h-1/2 '>
        <div className='flex flex-col justify-evenly items-center w-[75%] mx-auto h-[50%] pb-8'>

          <h1 className='font-p text-[2em] text-[#ff5500] font-extrabold'>Skills <ComputerIcon fontSize='1.5em' /></h1>

          <div className='skills-section w-full py-4 flex justify-evenly'>
            <ul className='skills-list justify-evenly flex flex-col'>
              
              <li className='skill font-t font-extralight flex space-x-2'>
                <FaReact color='blue' fontSize={'1.2em'} />
                <span>React</span>
              </li>

              <li className='skill font-t font-extralight flex space-x-2'>
                <RiJavascriptFill color='orange' fontSize={'1.2em'}/>
                <span>Javascript</span> 
              </li>

              <li className='skill font-t font-extralight flex space-x-2'>
                <FaNodeJs color='red' fontSize={'1.2em'}/>
                <span>NodeJS</span> 
              </li>

            </ul>

            <ul className='skills-list justify-evenly flex flex-col'>
              <li className='skill font-t font-extralight flex space-x-2'>
                <FaJava color='orangered' fontSize={'1.2em'}/>
                <span>Java</span> 
              </li>

              <li className='skill font-t font-extralight flex space-x-2'>    
                <TbBrandMongodb color='yellow' fontSize={'1.2em'}/>
                <span>MongoDB</span> 
              </li>

              <li className='skill font-t font-extralight flex space-x-2'> 
                <SiSass color='pink' fontSize={'1.2em'}/>
                <span>Sass</span> 
              </li>
            </ul>

          </div>

        </div>
      </div>
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ff5500" fillOpacity="1" d="M0,160L40,154.7C80,149,160,139,240,122.7C320,107,400,85,480,96C560,107,640,149,720,144C800,139,880,85,960,85.3C1040,85,1120,139,1200,149.3C1280,160,1360,128,1400,112L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
      </svg>
    </>
  )
}

export default Skills