import CalculateIcon from '@mui/icons-material/Calculate';
import { Stack, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MacroCalculatorContainer } from '../../../components/macro-calculator-container';
import { useAuth } from '../../../context/authContext';
import { useHomeOutlet } from '../../../hooks/useHomeOutlet';
import './MacroCalculatorPage.scss';

const MacroCalculatorPage = () => {
   const { setAlertMessage, setOpenAlert, setAlertSeverity, setGoals } =
      useHomeOutlet();

   const { isLoading } = useAuth();
   const [showNextPage, setShowNextPage] = useState(false);

   useEffect(() => {
      getGoals();
   }, []);

   const getGoals = async () => {
      try {
         const currentGoals = await axios.get('/api/goals');
         if (currentGoals.data !== '') {
            setGoals(currentGoals.data);
         }
      } catch (err) {
         console.log(err);
      }
   };
   return isLoading ? null : (
      <>
         <div className='macro-calc-page'>
            <Stack direction='row' spacing={1}>
               <CalculateIcon />
               <Typography variant='body1' align='center'>
                  Recalculate your goals here, or navigate to your user profile
                  page to enter your desired macronutrients
               </Typography>
            </Stack>
            <MacroCalculatorContainer
               setOpenErrorAlert={setOpenAlert}
               setErrorMessage={setAlertMessage}
               setShowNextPage={setShowNextPage}
               setShowSignup={setShowNextPage}
               setAlertSeverity={setAlertSeverity}
               page={'macrocalculator'}
               showNextPage={showNextPage}
               setGoals={setGoals}
            />
         </div>
      </>
   );
};

export default MacroCalculatorPage;
