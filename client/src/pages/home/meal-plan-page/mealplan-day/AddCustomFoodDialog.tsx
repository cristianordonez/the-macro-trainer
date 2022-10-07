import {
   AlertColor,
   Box,
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogTitle,
   Divider,
   SelectChangeEvent,
   Stack,
   Typography,
} from '@mui/material';
import React, {
   Dispatch,
   FormEventHandler,
   MouseEventHandler,
   SetStateAction,
} from 'react';
import { CustomFoodInput, MealplanItem } from '../../../../../../types/types';
import { CreateFoodTextInput } from '../../../../components/form-input-components/CreateFoodTextInput';
import { FormNumberInput } from '../../../../components/form-input-components/FormNumberInput';
import { NutritionDataForm } from '../../../../components/form-input-components/NutritionDataForm';
import { ServingSizeUnitInput } from '../../../../components/form-input-components/ServingSizeUnitInput';
interface Props {
   openDialog: boolean;
   handleOpeningDialog: MouseEventHandler<HTMLButtonElement>;
   setOpenAlert: Dispatch<SetStateAction<boolean>>;
   setOpenDialog: Dispatch<SetStateAction<boolean>>;
   setAlertSeverity: Dispatch<SetStateAction<AlertColor>>;
   setAlertMessage: Dispatch<SetStateAction<string>>;
   currentDay: string;
   setMealPlanItems: Dispatch<SetStateAction<MealplanItem[]>>;
   showNutrientDataForm: boolean;
   setShowNutrientDataForm: Dispatch<SetStateAction<boolean>>;
   createFoodData: CustomFoodInput;
   setCreateFoodData: Dispatch<SetStateAction<CustomFoodInput>>;
   handleSubmit: FormEventHandler;
}

export const AddCustomFoodDialog = ({
   openDialog,
   handleOpeningDialog,
   currentDay,
   setAlertSeverity,
   setAlertMessage,
   setOpenDialog,
   setOpenAlert,
   setMealPlanItems,
   showNutrientDataForm,
   createFoodData,
   setCreateFoodData,
   handleSubmit,
   setShowNutrientDataForm,
}: Props) => {
   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setCreateFoodData({
         ...createFoodData,
         [event.target.id]: event.target.value,
      });
   };

   const handleSelectChange = (event: SelectChangeEvent) => {
      setCreateFoodData({
         ...createFoodData,
         serving_size_unit: event.target.value,
      });
   };

   const handleNutritionInput = (
      event: React.ChangeEvent<HTMLInputElement>
   ) => {
      setCreateFoodData((createFoodData) => ({
         ...createFoodData,
         nutrition: {
            ...createFoodData.nutrition,
            [event.target.id]: parseFloat(event.target.value),
         },
      }));
   };

   //TODO make sure user cannot continue unless required fields on first part are filled out
   const handleShowingNutrientDataForm = (e: React.FormEvent) => {
      e.preventDefault();
      setShowNutrientDataForm(!showNutrientDataForm);
   };

   return (
      <>
         <Dialog open={openDialog} fullWidth>
            <DialogTitle>Create Custom Food</DialogTitle>
            <form onSubmit={handleSubmit}>
               <DialogContent sx={{ p: 0, width: '100%' }}>
                  {showNutrientDataForm ? (
                     <NutritionDataForm
                        handleNutritionInput={handleNutritionInput}
                        nutritionData={createFoodData.nutrition}
                     />
                  ) : (
                     <Box display='flex' flexDirection='column' gap='10px'>
                        <CreateFoodTextInput
                           inputValue={createFoodData.brand_name}
                           title='Brand name'
                           id={'brand_name'}
                           handleInputChange={handleInputChange}
                        />
                        <CreateFoodTextInput
                           inputValue={createFoodData.description}
                           title='Description'
                           id={'description'}
                           handleInputChange={handleInputChange}
                        />
                        <Divider />
                        <Stack
                           spacing={2}
                           direction={'row'}
                           alignItems='center'
                           justifyContent={'center'}
                           sx={{ pl: '1rem', pr: '1rem' }}
                        >
                           <Typography
                              sx={{ width: '35%' }}
                              variant='body2'
                              align='center'
                           >
                              Serving Size
                           </Typography>
                           <FormNumberInput
                              inputValue={createFoodData.serving_size}
                              handleNumberChange={handleInputChange}
                              label={'Amount per serving'}
                              id={'serving_size'}
                           />
                           <ServingSizeUnitInput
                              servingSizeUnit={createFoodData.serving_size_unit}
                              handleSelectChange={handleSelectChange}
                           />
                        </Stack>
                     </Box>
                  )}
               </DialogContent>
               <DialogActions>
                  <Button onClick={handleOpeningDialog} color='error'>
                     Cancel
                  </Button>
                  {showNutrientDataForm ? (
                     <Button
                        data-testid='create-food-btn'
                        aria-label='submit form to create a new food'
                        type='submit'
                        color='success'
                     >
                        Submit
                     </Button>
                  ) : (
                     <Button
                        data-testid='create-food-btn'
                        aria-label='submit form to create a new food'
                        onClick={handleShowingNutrientDataForm}
                        color='info'
                     >
                        Almost done
                     </Button>
                  )}
               </DialogActions>
            </form>
         </Dialog>
      </>
   );
};
