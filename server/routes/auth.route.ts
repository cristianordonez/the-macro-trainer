import { NextFunction, Request, Response, Router } from 'express';
import * as userController from '../controllers/user.controller';
import { Session } from '../../types/types';
import passport from 'passport';
const router = Router();

router.get('/', (req: Request, res: Response) => {
   res.status(200).json({
      status: 'success',
      data: {
         name: 'Diabetes Meal Plan',
         version: '1.0.0',
      },
   });
});

//sends link to users email to change password
router.post('/forgotPassword', (req: Request, res: Response) => {
   userController.forgotPassword(req, res);
});

//handles checking token and resetting password for user
router.post('/resetPassword', (req: Request, res: Response) => {
   userController.resetPassword(req, res);
});

//GOOGLE AUTHENTICATION////////////////////////////
//handles initial redirect of user to google
router.get('/login/federated/google', passport.authenticate('google'));

//gets code from google, then exchaanges code for profile info
router.get(
   '/oauth2/redirect/google',
   passport.authenticate('google', {
      failureRedirect: '/login',
      failureMessage: true,
   }), //fires second part of passport strategy
   (req: Request, res: Response) => {
      let session = req.session as unknown as Session;
      let user = req.user as any;
      session.user_id = session.passport.user;
      session.username = user.emails[0].value;
      //redirect user to the search page where session will be checked
      res.redirect('/home/search');
   }
);

////////////////////////////////////////////////////////
//# handles checking if user is logged in for protected routes
router.get('/authentication', (req: Request, res: Response) => {
   userController.checkAuthentication(req, res);
});

//# handles creating account
router.post('/signup', (req: Request, res: Response) => {
   userController.createAccount(req, res);
});

router.post(
   '/login',
   passport.authenticate('local', {
      failureRedirect: `/login`,
      failureMessage: true,
   }),
   (req: Request, res: Response) => {
      let user: any = req.user;

      let session = req.session as any;
      session.user_id = user.id;
      session.username = user.username;
      session.save();

      res.status(201).send('Successfully logged in.');
      // res.status(201).redirect('/home/search');
   }
);

router.post('/logout', (req: any, res: Response, next: NextFunction) => {
   req.logout(function (err: any) {
      if (err) {
         return next(err);
      }
      req.session.destroy();
      res.status(200).send('You have been logged out');
   });
});

//#endpoint that gets redirect to when there is error logging in,
// used so that client can be sent error message from server
router.get('/error', (req: Request, res: Response) => {
   let session = req.session as unknown as Session;
   res.status(500).send('Incorrect username or password.');
});

export { router };
