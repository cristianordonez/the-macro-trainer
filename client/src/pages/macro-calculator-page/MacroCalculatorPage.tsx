import React, { useState } from 'react';
import { CustomAlert } from '../../components/shared/CustomAlert';
import { AlertColor } from '@mui/material';
import { MacroCalculatorForm } from '../../components/shared/macro-calculator-form';

export const MacroCalculatorPage = () => {
   const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
   //todo change these state items so that they do something when form is submitted
   const [showNextPage, setShowNextPage] = useState(false);
   const [showSignup, setShowSignup] = useState(false);
   const [alertSeverity, setAlertSeverity] = useState<AlertColor | undefined>(
      'error'
   );
   const [alertMessage, setAlertMessage] = useState<string>(
      'No options matched your search. Try again with a broader search.'
   );

   const handleAlert = (event: React.SyntheticEvent | Event) => {
      setOpenSnackbar(false);
   };
   //todo move macrocalc form to shared component form
   return (
      <>
         <MacroCalculatorForm
            setOpenErrorAlert={setOpenSnackbar}
            setErrorMessage={setAlertMessage}
            setShowNextPage={setShowNextPage}
            setShowSignup={setShowSignup}
            setAlertSeverity={setAlertSeverity}
            page={'macrocalculator'}
            showNextPage={showNextPage}
         />
         <CustomAlert
            openAlert={openSnackbar}
            handleAlert={handleAlert}
            alertSeverity={alertSeverity}
            alertMessage={alertMessage}
         />
      </>
   );
};
