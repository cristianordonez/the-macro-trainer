import { Request, Response } from 'express';
import { Query } from '../../types/types';
import * as apiHelpers from '../API/api';

export const getRecipes = async (req: Request, res: Response) => {
   const query = req.query as unknown as Query;
   try {
      if (req.query) {
         let recipes = await apiHelpers.getSpoonacularRecipes(query);
         res.send(recipes);
      }
   } catch (err) {
      console.log(err);
      res.status(400).send('Could not get recipes.');
   }
};

type Params = {
   id: number;
};

export const getRecipeById = async (req: Request, res: Response) => {
   const params = req.params as unknown as Params;
   try {
      let recipeInfo = await apiHelpers.getSpoonacularRecipeById(params.id);
      res.status(200).send(recipeInfo);
   } catch (err) {
      console.log(err);
      res.status(400).send('Could not get recipe information');
   }
};

type RecipeQuery = {
   offset: string;
   number: string;
   query: string;
};

export const getRecipesByQuery = async (req: Request, res: Response) => {
   const query = req.query as unknown as RecipeQuery;
   try {
      let recipes = await apiHelpers.getSpoonacularRecipesByQuery(query);
      res.status(200).send(recipes);
   } catch (err) {
      console.log('err: ', err);
      res.status(400).send('Unable to find recipes.');
   }
};

export const getRandomRecipes = async (req: Request, res: Response) => {
   try {
      let popularRecipes = await apiHelpers.getSpoonacularRandomRecipes();
      res.status(200).send(popularRecipes);
   } catch (err) {
      console.log('err: ', err);
      res.status(400).send('Unable to retrieve recipes.');
   }
};
