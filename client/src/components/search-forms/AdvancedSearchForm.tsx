import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Button, SelectChangeEvent, Stack } from '@mui/material';
import React, { FormEventHandler } from 'react';
import { CurrentGoals, Query } from '../../../../types/types';
import { CategoryDropDown } from './search-form-components/CategoryDropDown';
import { CheckBoxGroup } from './search-form-components/checkbox-group/CheckBoxGroup';
import { NutrientInputForm } from './search-form-components/NutrientInputForm';
import { QueryTextField } from './search-form-components/QueryTextField';

interface Props {
   values: Query;
   handleSubmit: FormEventHandler<HTMLFormElement>;
   handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
   handleTypeSelect: (event: SelectChangeEvent) => void;
   goals: CurrentGoals;
   handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AdvancedSearchForm = ({
   values,
   handleSubmit,
   handleInputChange,
   handleTypeSelect,
   goals,
   handleCheckboxChange,
}: Props): ReactJSXElement => {
   return (
      <>
         <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
               <QueryTextField
                  query={values.query}
                  handleInputChange={handleInputChange}
               />
               <CategoryDropDown
                  type={values.category}
                  handleTypeSelect={handleTypeSelect}
               />

               <CheckBoxGroup
                  allergies={values.allergies}
                  handleCheckboxChange={handleCheckboxChange}
               />
               <NutrientInputForm
                  handleInputChange={handleInputChange}
                  measurement={'kcal'}
                  nutrient={'Calories'}
                  goals={goals}
                  minValue={values.minCalories}
                  maxValue={values.maxCalories}
               />
               <NutrientInputForm
                  handleInputChange={handleInputChange}
                  measurement={'g'}
                  nutrient={'Carbs'}
                  goals={goals}
                  minValue={values.minCarbs}
                  maxValue={values.maxCarbs}
               />
               <NutrientInputForm
                  handleInputChange={handleInputChange}
                  measurement={'g'}
                  nutrient={'Protein'}
                  goals={goals}
                  minValue={values.minProtein}
                  maxValue={values.maxProtein}
               />
               <NutrientInputForm
                  handleInputChange={handleInputChange}
                  measurement={'g'}
                  nutrient={'Fat'}
                  goals={goals}
                  minValue={values.minFat}
                  maxValue={values.maxFat}
               />
               <Button type='submit' variant='contained'>
                  Submit
               </Button>
            </Stack>
         </form>
      </>
   );
};