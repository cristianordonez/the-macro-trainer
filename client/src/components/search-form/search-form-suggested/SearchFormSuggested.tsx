import React from 'react';
import { Button, Typography, Stack } from '@mui/material';
import { NutrientInputForm } from '../helper-components/NutrientInputForm';
import { SearchInput } from '../helper-components/SearchInput';
import { QueryTextField } from '../helper-components/QueryTextField';
import { TypeDropDown } from '../helper-components/TypeDropDown';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

// interface Goals {
//    total_carbohydrates: number | string;
//    min_carbs_per_meal: number | string;
//    max_carbs_per_meal: number | string;
//    total_protein: number | string;
//    min_protein_per_meal: number | string;
//    max_protein_per_meal: number | string;
//    total_fat: number | string;
//    min_fat_per_meal: number | string;
//    max_fat_per_meal: number | string;
//    total_calories: number | string;
//    min_calories_per_meal: number | string;
//    max_calories_per_meal: number | string;
// }

interface Props {
   route: any;
   values: any;
   handleRouteChange: any;
   handleInputChange: any;
   handleTypeSelect: any;
   goals: any;
   handleSuggestedSubmit: any;
}

const SearhFormSuggested = ({
   route,
   values,
   handleRouteChange,
   handleInputChange,
   handleTypeSelect,
   goals,
   handleSuggestedSubmit,
}: Props): ReactJSXElement => {
   return (
      <>
         <form onSubmit={handleSuggestedSubmit}>
            <Stack spacing={3}>
               <Typography variant='body1'>
                  Search for either recipe, a grocery product, or a menu item
                  from large list of restaurants
               </Typography>
               {/* ROUTES */}

               <SearchInput
                  route={route}
                  handleRouteChange={handleRouteChange}
               />
               {/* QUERY */}

               <QueryTextField
                  query={values.query}
                  handleInputChange={handleInputChange}
               />
               {/* TYPE */}

               <TypeDropDown
                  type={values.type}
                  handleTypeSelect={handleTypeSelect}
               />
               <Typography variant='subtitle2'>
                  {' '}
                  Suggested goals are calculated based on recommend amounts per
                  meal, considering 3 meals are had per day.
               </Typography>
               {/* CALORIES */}
               <Typography variant='h6'>Choose Calorie Range</Typography>
               <NutrientInputForm
                  handleInputChange={handleInputChange}
                  measurement={'kcal'}
                  nutrient={'Calories'}
                  minValue={goals.min_calories_per_meal}
                  maxValue={goals.max_calories_per_meal}
               />
               {/* CARBS */}
               <Typography variant='h6'>Choose Carb Range</Typography>
               <NutrientInputForm
                  handleInputChange={handleInputChange}
                  measurement={'g'}
                  nutrient={'Carbs'}
                  minValue={goals.min_carbs_per_meal}
                  maxValue={goals.max_carbs_per_meal}
               />

               {/* PROTEIN */}
               <Typography variant='h6'>Choose Protein Range</Typography>
               <NutrientInputForm
                  handleInputChange={handleInputChange}
                  measurement={'g'}
                  nutrient={'Protein'}
                  minValue={goals.min_protein_per_meal}
                  maxValue={goals.max_protein_per_meal}
               />
               {/* FAT */}
               <Typography variant='h6'>Choose Fat Range</Typography>
               <NutrientInputForm
                  handleInputChange={handleInputChange}
                  measurement={'g'}
                  nutrient={'Fat'}
                  minValue={goals.min_fat_per_meal}
                  maxValue={goals.max_fat_per_meal}
               />
               <Button type='submit'>Submit</Button>
            </Stack>
         </form>
      </>
   );
};

export default SearhFormSuggested;
