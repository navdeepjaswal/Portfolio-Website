import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({ project }) {
  return (
    <div className='card-container p-3'>
      <Card sx={{ maxWidth: 345 }}>

        <CardActionArea>
          <a href={project.url} target="_blank">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <h1 className='font-p'>{project.name}</h1>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p className='font-t'>{project.description}</p>
              </Typography>
            </CardContent>
          </a>

        </CardActionArea>
      </Card>
    </div>
  );
}
