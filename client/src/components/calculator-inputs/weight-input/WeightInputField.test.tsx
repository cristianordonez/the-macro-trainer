//@ts-nocheck
/**
 * @jest-environment jsdom
 */
import React, { useState } from 'react';
import { expect } from '../../../../../jestGlobals';
import {
   render,
   waitFor,
   screen,
   fireEvent,
   pointer,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { WeightInputField } from './WeightInputField';

function App() {
   const [weight, setWeight] = useState('250');
   return <WeightInputField weight={weight} setWeight={setWeight} />;
}
describe('WeightInputField', () => {
   test('Allows user to change weight', async () => {
      const user = userEvent.setup();
      render(<App />);
      user.pointer([
         {
            target: screen.getByTestId('weight-slider'),
            offset: 2,
            keys: '[MouseLeft>]',
         },
         { offset: 5 },
      ]);
   });
});
