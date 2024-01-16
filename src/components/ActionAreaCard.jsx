import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../index.css'

export default function ActionAreaCard({ project }) {
  return (
    <div className='card-container p-3'>
      <Card sx={{ maxWidth: 345, height: '100%' }}>

        <CardActionArea className='h-52' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <a href={project.url} target="_blank">
            <CardContent>
              <Typography variant="h5" component="div" className='!font-bold text-[#ff5500] text-center duration-1000 hover-1'>
                <h1 className='project-title font-p'>{project.name}</h1>
              </Typography>

              <p className='project-description font-p text-sm text-center p-2 pt-3'>{project.description}</p>
            </CardContent>
          </a>

        </CardActionArea>
      </Card>
    </div>
  );
}
