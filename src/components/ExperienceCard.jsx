import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function ExperienceCard({content}) {

  return (
    <>
    {content == "work" && 
    <div className='work-experience-container '>
      <h1 className='font-p font-bold text-[2em] underline pb-1' style={{letterSpacing: '1px', textUnderlineOffset: '.15em'}}>Work Experience</h1>
      <h2 className='font-t pb-1 font-bold text-[1.2em]'>ExpanseFT, New York </h2>
      <h2 className='font-p pb-2 font-normal' style={{letterSpacing: '2px'}}>Full-Stack Developer</h2>
      <p className='font-t pb-2 text-[.8em] font-light'>Jan 2000 - Oct 2023 </p>
          <ul>
            <li className='font-t font-extralight text-[.9em]'> <ChevronRightIcon/> Integrated Direct Deposit Switch by Atomic API on cardholder sites, fostering high-level discussions with Atomic API developers and CEOs for user engagement and prepaid card adoption.</li>
            <li className='font-t font-extralight text-[.9em]'> <ChevronRightIcon/> Implemented Link feature by Plaid API, driving revenue growth through seamless bank connections and user-friendly money transfers.</li>
            <li className='font-t font-extralight text-[.9em]'> <ChevronRightIcon/> Led UI initiatives for cardholder sites, translating Figma designs to code using Photoshop, HTML, CSS, and JS, promoting user engagement and revenue potential.</li>
            <li className='font-t font-extralight text-[.9em]'> <ChevronRightIcon/> Set up webhooks for Atomic APIs using AWS Lambda and SQS with Node JS.</li>
            <li className='font-t font-extralight text-[.9em]'> <ChevronRightIcon/> Collaborated closely with senior full-stack developers to learn best practices in modularity, scalability, and maintaining clean and efficient code.</li>
            <li className='font-t font-extralight text-[.9em]'> <ChevronRightIcon/> Conducted interviews, trained new hires, and fostered a collaborative environment, demonstrating leadership skills.</li>
            <li className='font-t font-extralight text-[.9em]'> <ChevronRightIcon/> Enhanced site-wide pages working with microservices, improving modularity and scalability, and integrated features from the controller side following MVC architecture principles.</li>
            <li className='font-t font-extralight text-[.9em]'> <ChevronRightIcon/> Revamped Avid and Nexscard marketing websites, improving UI/UX design for responsiveness, attractiveness, and user-friendliness.</li>
          </ul>
        </div>
    }

    {content == "school" && 
    <div className='school-experience-container'>
      <h1 className='font-p font-bold text-[2em] underline pb-1' style={{letterSpacing: '1px', textUnderlineOffset: '.15em'}}>Education</h1>
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