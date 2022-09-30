import { Request, Response } from 'express';
import { CurrentGoals } from '../../types/types';
import { create, get, update } from '../models/goals.model';

const getGoals = async (req: any, res: Response) => {
   try {
      let user_id = req.session.user_id;
      console.log('user_id:', user_id);
      console.log('req.session:', req.session);
      let userGoals: CurrentGoals[] = await get(user_id);
      console.log('userGoals:', userGoals);
      res.status(201).send(userGoals[0]);
   } catch (err) {
      console.log(err);
      res.status(500).send('Unable to retrieve daily goals.');
   }
};

const createGoals = async (req: Request, res: Response) => {
   try {
      let session: any = req.session;
      let user_id: number = session.user_id;
      let body = { ...req.body, user_id };
      let initialResponse = await create(body);
      res.status(201).json(session.user_id);
   } catch (err) {
      console.log(err);
      res.status(400).send(err);
   }
};

const updateGoals = async (req: Request, res: Response) => {
   try {
      let session: any = req.session;
      let user_id: number = session.user_id;
      let body = { ...req.body, user_id };
      let initialResponse = await update(body);
      res.status(201).send(initialResponse);
   } catch (err) {
      console.log(err);
      res.status(400).send('Unable to update daily goals.');
   }
};

export { getGoals, createGoals, updateGoals };