import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SchoolIcon from '@mui/icons-material/School';
import ExperienceCard from './ExperienceCard'

export default function Experience() {
  return (
    <>
      <div className='experience bg-[#ff5500] text-white'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-p text-[2.5em] font-extrabold underline' style={{ textDecorationColor: 'gold', textUnderlineOffset: '20px' }}>Experience</h1>

          <div className='w-[75%] mx-auto p-8 text-montserrat'>
            <Timeline position="alternate">
              {/* 1st item */}
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align="right"
                  variant="body2"
                  color="text.secondary"
                >
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot style={{ backgroundColor: '#ff5500' }}>
                    <WorkHistoryIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  {/* experience card */}
                  <ExperienceCard content="work" />

                </TimelineContent>
              </TimelineItem>

              {/* 2nd item */}
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  variant="body2"
                  color="text.secondary"
                >
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot style={{ backgroundColor: '#ff5500' }}>
                    <SchoolIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>

                  {/* experience card */}
                  <ExperienceCard content="school" />
                </TimelineContent>
              </TimelineItem>

            </Timeline>
          </div>
        </div>

      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path fill="#ff5500" fillOpacity="1" d="M0,96L40,101.3C80,107,160,117,240,128C320,139,400,149,480,144C560,139,640,117,720,96C800,75,880,53,960,53.3C1040,53,1120,75,1200,101.3C1280,128,1360,160,1400,176L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
    </>


  );
}