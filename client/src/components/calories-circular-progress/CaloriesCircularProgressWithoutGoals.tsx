import { CircularProgress, Typography } from '@mui/material';
import React from 'react';
import { CurrentGoals } from '../../../../types/types';
import './CaloriesCircularProgress.scss';

interface Props {
   goals: CurrentGoals;
}

export const CaloriesCircularProgressWithoutGoals = ({ goals }: Props) => {
   return (
      <>
         <div className='daily-goals-kcal'>
            <CircularProgress
               variant='determinate'
               size={200}
               value={100}
               thickness={1}
               color='primary'
            />
            <div className='daily-goals-kcal-title'>
               <Typography align='center' variant='body1'>
                  Total Calories
               </Typography>
               <Typography align='center' variant='h6'>
                  {goals.total_calories}
               </Typography>
            </div>
         </div>
      </>
   );
};
