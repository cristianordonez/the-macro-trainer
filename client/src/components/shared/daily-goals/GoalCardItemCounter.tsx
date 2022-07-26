import React, { Dispatch, SetStateAction } from 'react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { GoalsType } from '../../../../types/types';
import {
   Card,
   CardContent,
   Typography,
   TextField,
   LinearProgress,
   Stack,
   Input,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface Props {
   nutrientsTotal: number;
   type: 'Carbohydrates' | 'Protein' | 'Fat';
   page: 'search' | 'user-profile';
   setGoals?: Dispatch<SetStateAction<GoalsType>>;
   goals: GoalsType;
}

export const GoalCardItemCounter = ({
   nutrientsTotal,
   type,
   page,
   setGoals,
   goals,
}: Props): ReactJSXElement => {
   const Arrow: JSX.Element = (
      <>
         <Stack direction={'column'}>
            <KeyboardArrowUpIcon />
            <KeyboardArrowDownIcon />
         </Stack>
      </>
   );
   //takes in total macronutrient amount entered and also changes associated min and max amounts
   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (setGoals !== undefined) {
         if (event.target.id === 'Carbohydrates') {
            let totalCarbs = parseInt(event.target.value);
            //declare min value here in case it will calculate to negative number
            let minCarbsPerMeal = totalCarbs <= 15 ? 0 : totalCarbs / 3 - 5;
            setGoals({
               ...goals,
               total_carbohydrates: totalCarbs,
               min_carbs_per_meal: Math.floor(minCarbsPerMeal),
               max_carbs_per_meal: Math.floor(totalCarbs / 3 + 5),
            });
         } else if (event.target.id == 'Protein') {
            let totalProtein = parseInt(event.target.value);
            //declare min value here in case it will calculate to negative number
            let minProteinPerMeal =
               totalProtein <= 30 ? 0 : totalProtein / 3 - 10;
            setGoals({
               ...goals,
               total_protein: totalProtein,
               min_protein_per_meal: Math.floor(minProteinPerMeal),
               max_protein_per_meal: Math.floor(totalProtein / 3 + 10),
            });
         } else if (event.target.id === 'Fat') {
            let totalFat = parseInt(event.target.value);
            //declare min value here in case it will calculate to negative number
            let minFatPerMeal = totalFat <= 30 ? 0 : totalFat / 3 - 10;
            setGoals({
               ...goals,
               total_fat: totalFat,
               min_fat_per_meal: Math.floor(minFatPerMeal),
               max_fat_per_meal: Math.floor(totalFat / 3 + 10),
            });
         }
      }
   };
   return (
      <>
         <Card>
            <CardContent>
               {page === 'user-profile' ? (
                  <Input
                     value={`${nutrientsTotal}`}
                     type='number'
                     endAdornment={Arrow}
                     onInput={handleChange}
                     id={type}
                     required
                  />
               ) : (
                  <Typography variant='subtitle1'>{nutrientsTotal}</Typography>
               )}
               <Typography variant='body2'>grams of {type}</Typography>
            </CardContent>
         </Card>
      </>
   );
};