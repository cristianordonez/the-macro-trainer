import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { Dispatch, MouseEvent, SetStateAction } from 'react';
import { AgeInputField } from '../form-input-components/calculator-inputs/age-input/AgeInputField';
import { HeightInputField } from '../form-input-components/calculator-inputs/height-input/HeightInputField';
import { WeightInputField } from '../form-input-components/calculator-inputs/weight-input/WeightInputField';

interface Props {
   handleGenderChange: (event: MouseEvent<HTMLElement>, value: string) => void;
   activityLevel: number;
   gender: string;
   handleActivityLevelChange: (
      event: MouseEvent<HTMLElement>,
      value: number
   ) => void;
   height: string | number;
   setHeight: Dispatch<SetStateAction<string | number>>;
   age: number | string;
   setAge: Dispatch<SetStateAction<number | string>>;
   weight: string | number;
   setWeight: Dispatch<SetStateAction<string | number>>;
   goal: string;
   handleGoalChange: (
      event: MouseEvent<HTMLElement>,
      value: 'weight_loss' | 'maintain' | 'gain_muscle'
   ) => void;
}

export const Calculator = ({
   handleGenderChange,
   gender,
   activityLevel,
   handleActivityLevelChange,
   age,
   setAge,
   height,
   setHeight,
   weight,
   setWeight,
   goal,
   handleGoalChange,
}: Props) => {
   return (
      <>
         <ToggleButtonGroup
            color='primary'
            fullWidth={true}
            value={goal}
            exclusive
            onChange={handleGoalChange}
         >
            <ToggleButton value='weight_loss'>Weight loss</ToggleButton>
            <ToggleButton value='maintain'>Maintain</ToggleButton>
            <ToggleButton value='gain_muscle'>Gain muscle</ToggleButton>
         </ToggleButtonGroup>
         <ToggleButtonGroup
            color='primary'
            fullWidth={true}
            value={activityLevel}
            exclusive
            onChange={handleActivityLevelChange}
         >
            <ToggleButton value={1}>Sedentary(no exercise)</ToggleButton>
            <ToggleButton value={1.25}>
               Moderate (2x - 4x per week)
            </ToggleButton>
            <ToggleButton value={1.5}>Active (5x+ per week)</ToggleButton>
         </ToggleButtonGroup>
         <ToggleButtonGroup
            color='primary'
            fullWidth={true}
            value={gender}
            exclusive
            onChange={handleGenderChange}
         >
            <ToggleButton value='male'>Male</ToggleButton>
            <ToggleButton value='female'>Female</ToggleButton>
            <ToggleButton value='other'>Non-binary</ToggleButton>
         </ToggleButtonGroup>
         <AgeInputField age={age} setAge={setAge} />
         <HeightInputField height={height} setHeight={setHeight} />
         <WeightInputField weight={weight} setWeight={setWeight} />
      </>
   );
};
