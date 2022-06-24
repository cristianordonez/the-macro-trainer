import React, { useState } from 'react';
import SearchForm from '../../components/search-form/SearchForm';
import DailyGoals from '../../components/daily-goals/DailyGoals';
import FoodSearchList from '../../components/food-search-list/FoodSearchList';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import axios from 'axios';

const Search = () => {
   const [apiData, setAPIData] = useState([]);
   const [route, setRoute] = useState<string>('recipes');
   const [wasEmptyResponse, setWasEmptyResponse] = useState(false);
   const [currentTab, setCurrentTab] = useState<string>('custom-search');
   const [open, setOpen] = useState(false);
   const [values, setValues] = useState({
      query: '',
      type: '',
      diet: '',
      intolerance: '',
      minCalories: '',
      maxCalories: '',
      minCarbs: '',
      maxCarbs: '',
      minProtein: '',
      maxProtein: '',
      minFat: '',
      maxFat: '',
      number: '', //number of items to return
      offset: '', //number of results to skip, useful for lazy loading
   });

   const handleClose = (event: React.SyntheticEvent | Event) => {
      setOpen(false);
   };
   const handleChange = (event: React.SyntheticEvent, currentValue: string) => {
      setCurrentTab(currentValue);
   };

   const handleSubmit = (event: React.SyntheticEvent) => {
      event.preventDefault();
      let promise = axios.get(`${__API__}/${route}`, { params: values });
      promise.then((response) => {
         console.log('response:', response);
         //set state of wasEmptyResponse to false or true to activate the snackbar to tell users their request was too strict
         response.data.length ? setOpen(false) : setOpen(true);
         setAPIData(response.data);
      });
      promise.catch((err) => {
         console.log('err:', err);
      });
   };
   return (
      <>
         <DailyGoals />
         {apiData.length ? (
            <FoodSearchList apiData={apiData} route={route} />
         ) : (
            <SearchForm
               handleSubmit={handleSubmit}
               route={route}
               setRoute={setRoute}
               handleChange={handleChange}
               currentTab={currentTab}
               setCurrentTab={setCurrentTab}
               values={values}
               setValues={setValues}
            />
         )}
         <Stack direction='row' spacing={2}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
               <Alert onClose={handleClose} severity='error'>
                  No options matched your search. Try again with a broader
                  search.{' '}
               </Alert>
            </Snackbar>
         </Stack>
      </>
   );
};

export default Search;
