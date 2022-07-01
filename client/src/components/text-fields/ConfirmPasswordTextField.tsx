import React from 'react';
import { TextField } from '@mui/material';

interface Props {
   error: boolean;
   handleCreateAccountChange(event: React.SyntheticEvent): any;
   errorMessage: string;
}

export const ConfirmPasswordTextField = ({
   error,
   handleCreateAccountChange,
   errorMessage,
}: Props) => {
   return (
      <TextField
         required
         error={error}
         label='Confirm Password'
         onChange={handleCreateAccountChange}
         type='password'
         name='confirmedPassword'
         variant='filled'
         fullWidth
         helperText={error ? errorMessage : 'Enter your password'}
      />
   );
};
