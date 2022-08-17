import React, { useState } from 'react';
import './ResetPasswordPage.scss';
import { PasswordTextField } from '../../components/text-fields/password-textfield/PasswordTextField';
import { ConfirmPasswordTextField } from '../../components/text-fields/confirm-password-textfield/ConfirmPasswordTextField';
import { CustomAlert } from '../../components/shared/CustomAlert';
import { Typography, Paper, Button, AlertColor } from '@mui/material';
import NavBar from '../../components/navbar/NavBar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function useQuery() {
   return new URLSearchParams(window.location.search);
}

const ResetPasswordPage = () => {
   const navigate = useNavigate();
   const [showTextFieldError, setShowTextFieldError] = useState<boolean>(false);
   const [showSignup, setShowSignup] = useState<boolean>(true); //this is just used so that password text field uses correct handler function
   const [password, setPassword] = useState<string>('');
   const [confirmPassword, setConfirmPassword] = useState<string>('');
   const [errorMessage, setErrorMessage] = useState<string>('');
   const [alertSeverity, setAlertSeverity] = useState<AlertColor>('error');
   const [openAlert, setOpenAlert] = useState<boolean>(false);
   const [alertMessage, setAlertMessage] = useState<string>('');
   const token = useQuery().get('token');
   const id = useQuery().get('id');

   const handleAlert = () => {
      setOpenAlert(!openAlert);
   };

   const handlePasswordChange = (
      event: React.ChangeEvent<HTMLInputElement>
   ) => {
      setPassword(event.target.value);
   };

   const handleConfirmPasswordChange = (
      event: React.ChangeEvent<HTMLInputElement>
   ) => {
      setConfirmPassword(event.target.value);
   };

   const handleChangePasswordSubmit = async (
      event: React.FormEvent<HTMLFormElement>
   ) => {
      event.preventDefault();
      try {
         if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            setShowTextFieldError(true);
         } else {
            await axios.post('/api/resetPassword', {
               userId: id,
               token: token,
               password: password,
            });
            setShowTextFieldError(false);

            navigate('/login', {
               state: { resetPassword: true },
               replace: true,
            });
         }
      } catch (err) {
         setAlertSeverity('error');
         setAlertMessage('Unable to change password.');
         setOpenAlert(true);
         console.log('err in form submit change password: ', err);
      }
   };

   return (
      <>
         <NavBar />
         <div className='signup'>
            <Paper
               elevation={2}
               component={'form'}
               className='signup-form'
               onSubmit={handleChangePasswordSubmit}
            >
               <Typography variant='h6'>Enter your new password</Typography>
               <PasswordTextField
                  showTextFieldError={showTextFieldError}
                  showSignup={showSignup}
                  handleCreateAccountChange={handlePasswordChange}
                  errorMessage={errorMessage}
               />
               <ConfirmPasswordTextField
                  errorMessage={errorMessage}
                  showTextFieldError={showTextFieldError}
                  handleCreateAccountChange={handleConfirmPasswordChange}
               />
               <Button type='submit' variant='contained' fullWidth>
                  Change password
               </Button>
            </Paper>
         </div>
         <CustomAlert
            openAlert={openAlert}
            handleAlert={handleAlert}
            alertSeverity={alertSeverity}
            alertMessage={alertMessage}
         />
      </>
   );
};

export default ResetPasswordPage;