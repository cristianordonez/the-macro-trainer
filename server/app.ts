require('dotenv').config();
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import session from 'express-session';
import cors from 'cors';
import passport from 'passport';
import { connectUser } from './API/api';
import { createGoogleUser, getById } from './models/user.model';
import { router as authRoute } from './routes/auth.route';
import { router as recipesRoute } from './routes/recipe.route';
import { router as menuItemsRoute } from './routes/menuitems.route';
import { router as groceryProductsRoute } from './routes/groceryproducts.route';
import { router as mealplanRoute } from './routes/mealplan.route';
import { Strategy as LocalStrategy } from 'passport-local';
const GoogleStrategy = require('passport-google-oidc');
const generator = require('generate-password');
import { db } from './database/db';
import bcrypt from 'bcrypt';
const pgSession = require('connect-pg-simple')(session);
const app = express();

//MIDDLEWARE
app.use(cors());

app.use(compression());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const database =
   process.env.NODE_ENV === 'test' ? 'mealplans_test' : 'mealplans';

const conObject = {
   user: process.env.USER,
   password: process.env.PASSWORD,
   host: process.env.HOST, // or whatever it may be
   port: 5432,
   database: database,
};

const pgStoreConfig = {
   conObject: conObject,
};

app.use(
   session({
      store: new pgSession(pgStoreConfig),
      secret: `${process.env.SESSION_SECRET}`,
      saveUninitialized: false,
      resave: false,
      cookie: {
         secure: false,
         httpOnly: false,
         maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
      },
   })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
   new LocalStrategy((username, password, cb) => {
      db.query(
         `SELECT id, username, hash, email FROM users WHERE username='${username}'`
      )
         .then(function (result: any) {
            console.log('result in use local strat passport: ', result);
            if (result.length) {
               const first = result[0];
               bcrypt.compare(password, first.hash, function (err, res) {
                  if (res) {
                     cb(null, {
                        id: first.id,
                        username: first.username,
                     });
                  } else {
                     cb(null, false, { message: 'Incorrect password' });
                  }
               });
            } else {
               //todo handle if username does not exist
               console.log('username does not exist passport local strat');
               cb(null, false, {
                  message: 'No account with that username exists',
               });
            }
         })
         .catch(function (err: any) {
            console.log(err);
            return cb(err);
         });
   })
);

passport.use(
   new GoogleStrategy(
      {
         clientID: process.env['GOOGLE_CLIENT_ID'],
         clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
         callbackURL: '/api/oauth2/redirect/google',
         scope: ['profile', 'email'], //the data we are asking for from google
      },
      (issuer: any, profile: any, done: any) => {
         getById(profile.id)
            .then((response) => {
               //if user exists, redirect
               if (response.length > 0) {
                  //other wise create account
                  done(null, profile);
               } else {
                  let password = generator.generate({
                     length: 8,
                     numbers: true,
                  });
                  let spoonacularAccountPromise = connectUser({
                     username: profile.displayName,
                     email: profile.emails[0].value,
                     password: password,
                  }).then((spoonacularAccount) => {
                     let currentHash: Promise<string | void> = bcrypt //get hashed password to insert into database
                        .hash(password, 10)
                        .then((hash) => {
                           let user = {} as any;
                           user.spoonacular_username =
                              spoonacularAccount.data.username;
                           user.spoonacular_password =
                              spoonacularAccount.data.spoonacularPassword;
                           user.spoonacular_hash = spoonacularAccount.data.hash;
                           user.hash = hash;
                           user.username = profile.displayName;
                           user.email = profile.emails[0].value;
                           user.id = profile.id;
                           createGoogleUser(user).then((userId) => {
                              done(null, profile);
                           }); // then, send data to model to store all info in db
                        });
                  });
               }
            })
            .catch((err) => {
               console.log(err);
               done(err);
            });
      }
   )
);

//determines which data of user object should be stored in session to be accessed
// below in the deserializeUser function
passport.serializeUser((user: any, done) => {
   done(null, user.id);
});

passport.deserializeUser((id: string, cb) => {
   db.query(
      `SELECT id, username, email, spoonacular_username FROM users WHERE id='${id}'`
   )
      .then(function (results: any) {
         cb(null, results[0]);
      })
      .catch(function (err: any) {
         return cb(err);
      });
});

//ROUTES
app.use('/api', authRoute);
app.use('/api/recipes', recipesRoute);
app.use('/api/menuItems', menuItemsRoute);
app.use('/api/groceryProducts', groceryProductsRoute);
app.use('/api/mealplan', mealplanRoute);

app.get('/*', (req, res) => {
   res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

export default app; //export to be used for tests and in server.js
