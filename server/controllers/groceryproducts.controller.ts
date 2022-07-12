import { Request, Response } from 'express';
import * as apiHelpers from '../API/api';
import { Query } from './controllers.types';

export const getGroceryProducts = async function (req: Request, res: Response) {
   const query = req.query as unknown as Query;
   try {
      let groceryProducts = await apiHelpers.getSpoonacularGroceryProducts(
         query
      );
      res.send(groceryProducts);
   } catch (err) {
      console.log('err:', err);
      res.status(400).send('Could not get grocery products.');
   }
};
