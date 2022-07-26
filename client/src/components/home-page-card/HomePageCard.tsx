import React from 'react';
import './HomePageCard.scss';
import {
   Typography,
   Card,
   CardContent,
   CardMedia,
   Paper,
   Grid,
} from '@mui/material';

interface Props {
   body: string;
   title: string;
   image: string;
}

export const HomePageCard = ({ body, title, image }: Props) => {
   return (
      <Grid item xs={12} md={4}>
         <Paper>
            <Card>
               <CardMedia
                  component='img'
                  className='home-page-card'
                  // height='140'
                  image={image}
                  alt='How to use app'
               />
               <CardContent>
                  <Typography variant='h6'>{title}</Typography>
                  <Typography variant='body2'>{body}</Typography>
               </CardContent>
            </Card>
         </Paper>
      </Grid>
   );
};