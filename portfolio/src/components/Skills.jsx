import React from 'react'
import ComputerIcon from '@mui/icons-material/Computer';
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { FaJava } from "react-icons/fa";

function Skills() {
  return (
    <>
      <div className='skills-container w-full h-1/2 '>
        <div className='flex flex-col justify-evenly items-center w-[75%] mx-auto h-[50%] p-8'>
            
            <h1 className='text-[2em] text-[#ff5500] font-bold'>Skills <ComputerIcon fontSize='1.5em'/></h1>
            
            <div className='skills-section w-full'>
                <ul className='flex justify-evenly'>
                    <li>React <FaReact /></li>
                    <li>Javascript <RiJavascriptFill/></li>
                    <li>Java <FaJava/></li>
                    <li>NodeJS <DiNodejs/></li>
                </ul>
            </div>
        
        </div>
      </div>
    </>
  )
}

export default Skills