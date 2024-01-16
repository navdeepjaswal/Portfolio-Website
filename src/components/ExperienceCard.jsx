import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function ExperienceCard({content}) {

  return (
    <>
    {content == "work" && 
    <div className='work-experience-container '>
      <h1 className='font-p font-bold text-[1.3em] 2xsm:text-[2em] underline pb-1 ' style={{letterSpacing: '1px', textUnderlineOffset: '.15em'}}>Work Experience</h1>
      <h2 className='font-t pb-1 font-bold text-[1.2em]'>ExpanseFT, New York </h2>
      <h2 className='font-p pb-2 font-normal' style={{letterSpacing: '2px'}}>Full-Stack Developer</h2>
      <p className='font-t pb-2 text-[.8em] font-light'>Jan 2000 - Oct 2023 </p>
          <ul>
            <li className='font-t font-extralight text-[.9em]'> <ChevronRightIcon/> Integrated a user-friendly Direct Deposit Switch feature using Atomic API on cardholder sites.</li>
            <li className='font-t font-extralight text-[.9em]'> <ChevronRightIcon/> Facilitated impactful demos and discussions with key executives, including Atomic API developers, the CEO of Expanse, and the CTO of ExpanseFT, to elevate user engagement and promote the widespread adoption of prepaid cards.</li>
            <li className='font-t font-extralight text-[.9em]'> <ChevronRightIcon/> Revamped Avid Prepaid and Nexscard marketing websites, improving UI/UX design for responsiveness, attractiveness, and user-friendliness.</li>
            <li className='font-t font-extralight text-[.9em]'> <ChevronRightIcon/> Led UI enhancements for cardholder sites by translating Figma designs into code using Photoshop, React, and JavaScript.</li>
            <li className='font-t font-extralight text-[.9em]'> <ChevronRightIcon/> Set up webhooks for Atomic APIs using AWS Lambda and SQS with Node JS.</li>
            <li className='font-t font-extralight text-[.9em]'> <ChevronRightIcon/> Improved site-wide pages using microservices, enhancing modularity and scalability, and seamlessly integrating features while adhering to sound architectural principles</li>
            <li className='font-t font-extralight text-[.9em]'> <ChevronRightIcon/> Collaborated closely with senior full-stack developers to learn best practices in modularity, scalability, and maintaining clean and efficient code.</li>
          </ul>
        </div>
    }

    {content == "school" && 
    <div className='school-experience-container'>
      <h1 className='font-p font-bold text-[1.3em] 2xsm:text-[2em] underline pb-1' style={{letterSpacing: '1px', textUnderlineOffset: '.15em'}}>Education</h1>
      <h2 className='font-t pb-1 font-bold text-[1.2em]'>New York Institute of Technology</h2>
      <h2 className='font-t font-extralight text-[.9em]'>Master of Science - Computer Science</h2>
      <p className='font-t font-extralight text-[.9em] italic '> GPA - 3.3</p>
      
      <h2 className='font-t pb-1 font-bold text-[1.2em]'>New York Institute of Technology</h2>
      <h2 className='font-t font-extralight text-[.9em]'>Bachelor of Science - Computer Science </h2>
      <p className='font-t font-extralight text-[.9em] italic'> GPA - 3.8</p>
    </div>
    }
    </>
  )
}

export default ExperienceCard;