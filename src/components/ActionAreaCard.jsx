import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../index.css'

export default function ActionAreaCard({ project }) {
  return (
    <div className='card-container p-3 flex'>
      <Card sx={{ maxWidth: 500, height: '100%', borderRadius: '15px' }}>
  
        <CardActionArea className='h-fit 2xsm:h-[8em] flex flex-col justify-between'>
          <a href={project.url} target="_blank" className='flex flex-col h-full'>
            <CardContent className='flex flex-col h-full'>
              <Typography variant="h5" component="div" className='!font-bold text-[#ff5500] text-center duration-1000 hover-1'>
                <h1 className='project-title font-p pt-1 2xsm:pt-0'>{project.name}</h1>
              </Typography>
  
              <p className='project-description font-t font-light xsm:font-extralight
              text-center p-2 pt-3 text-[.5em] 2xsm:text-[.6em]'>{project.description}</p>
            </CardContent>
          </a>
        </CardActionArea>
      </Card>
    </div>
  );
}
