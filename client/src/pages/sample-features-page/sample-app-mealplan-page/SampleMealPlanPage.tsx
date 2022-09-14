import React, { useEffect, useState } from 'react';
import './SampleMealPlanPage.scss';
import { SampleMealPlanDay } from './sample-mealplan-day/SampleMealplanDay';

import { MealPlanWeekText } from '../../../components/mealplan-week-text/MealPlanWeekText';
import { Tabs, Tab, CircularProgress } from '@mui/material';
import { SampleMealplanItem, FoodItemType } from '../../../../../types/types';
import getDay from 'date-fns/getDay';
import addDays from 'date-fns/addDays';
import subDays from 'date-fns/subDays';
import format from 'date-fns/format';
import axios from 'axios';
import { Box } from '@mui/system';
import { useSampleFeaturesOutlet } from '../../../hooks/useSampleFeaturesOutlet';

const days = [
   'Sunday',
   'Monday',
   'Tuesday',
   'Wednesday',
   'Thursday',
   'Friday',
   'Saturday',
];

const daysMobile = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

const SampleMealPlanPage = () => {
   const {
      mobileOpen,
      handleDrawerToggle,
      setNutritionSummary,
      setAlertSeverity,
      setOpenAlert,

      setValues,
      setSampleMealplanItems,
      setMealplanItems,
      isLoading,
      setAlertMessage,
      mealplanItems,
      setPopularRecipes,
      alertSeverity,
      alertMessage,
      openAlert,
      sampleMealplanItems,
      popularRecipes,
   } = useSampleFeaturesOutlet();

   const [dayIndex, setDayIndex] = useState<number>(getDay(Date.now())); //used for tab highlighting

   const [value, setValue] = React.useState<any>(new Date(Date.now()));

   const [currentDay, setCurrentDay] = useState(
      format(new Date(Date.now()), 'yyyy-MM-dd')
   ); //spoonacular api needs date in format '2022-07-13'

   const handleClose = (event: React.SyntheticEvent | Event) => {
      setOpenAlert(false);
   };

   //need to configure so that day is also changed when tab changes
   const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
      setMealplanItems([]); //when tab changes, reset the nutrition summary and the mealplan items
      setNutritionSummary({
         calories: 0,
         protein: 0,
         fat: 0,
         carbohydrates: 0,
      });

      const prevDate = currentDay; //create variable to store the previous date and previous tab index
      const prevDayIndex = dayIndex;
      let differenceInDays = newValue - dayIndex; //find out how many days before or after current date is new selected date by finding difference between previous tab and current tab
      let newDate: Date | number | undefined;
      let { year, month, day } = getFormattedDay(currentDay);
      if (differenceInDays > 0) {
         //then update current date by adding or subtracting correct number of days
         newDate = addDays(
            new Date(`${year}, ${month}, ${day}`),
            differenceInDays
         );
      } else if (differenceInDays < 0) {
         newDate = subDays(
            new Date(`${year}, ${month}, ${day}`),
            Math.abs(differenceInDays)
         );
      }
      if (newDate !== undefined) {
         setValue(newDate); //updates the date textfield value
         setDayIndex(newValue);
         setCurrentDay(format(newDate, 'yyyy-MM-dd'));
      }
   };

   const getFormattedDay = (date: string) => {
      let dates = date.split('-');
      let year = dates[0];
      let month = dates[1];
      let day = dates[2];
      return { year, month, day };
   };

   useEffect(() => {
      axios
         .get('/api/mealplan/sample')
         .then((response) => {
            setNutritionSummary(response.data.nutrients);
            const currentMealplanItems = response.data.meals;
            setSampleMealplanItems(currentMealplanItems);
            const promises = currentMealplanItems.map(
               (item: SampleMealplanItem) => {
                  return axios
                     .get(`/api/recipes/${item.id}`)
                     .then((response) => {
                        return response.data;
                     });
               }
            );
            Promise.all(promises).then((mealItems) => {
               setMealplanItems(mealItems);
            });
         })
         .catch((err) => {
            setAlertMessage(
               'Unable to retrieve meal plan items. Please try again later.'
            );
            setAlertSeverity('error');
            setOpenAlert(true);
         });
   }, [currentDay]);

   return (
      <>
         <div className='sample-mealplan-page'>
            <MealPlanWeekText currentDay={currentDay} />
            <Box sx={{ maxWidth: { xs: 320, sm: 480 } }}>
               <Tabs
                  value={dayIndex}
                  onChange={handleTabChange}
                  variant='scrollable'
                  scrollButtons='auto'
                  aria-label='change mealplan date'
               >
                  {days.map((day) => (
                     <Tab key={day} label={day} />
                  ))}
               </Tabs>
            </Box>
            {mealplanItems.length > 0 && sampleMealplanItems.length > 0 ? (
               <SampleMealPlanDay
                  mealplanItems={mealplanItems}
                  sampleMealplanItems={sampleMealplanItems}
               />
            ) : (
               <CircularProgress size={100} />
            )}
         </div>
      </>
   );
};

export default SampleMealPlanPage;