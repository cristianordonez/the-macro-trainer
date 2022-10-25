import { UserType } from '../../types/types';
import { db } from '../database/db';

const createUser = (user: UserType) => {
   try {
      const createQuery = `WITH getId AS 
          (INSERT INTO users (username, email) 
          VALUES ($1, $2) 
          RETURNING user_id)
          INSERT INTO user_hash (user_id, hash)
          VALUES ((SELECT user_id FROM getId), $3) RETURNING user_id`;
      const dbResponse = db.one(createQuery, [
         user.username,
         user.email,
         user.password,
      ]);
      return dbResponse;
   } catch (err) {
      console.log('err: ', err);
      return err;
   }
};

type GoogleUser = {
   username: string;
   email: string;
};

const createGoogleUser = async (user: GoogleUser) => {
   try {
      const createGoogleUserQuery = `INSERT INTO users (username, email) 
          VALUES ($1, $2) 
          RETURNING user_id`;
      const createGoogleUserResponse = db.one(createGoogleUserQuery, [
         user.username,
         user.email,
      ]);
      return createGoogleUserResponse;
   } catch (err) {
      console.log('err: ', err);
   }
};

const updatePassword = async (userId: number, password: string) => {
   try {
      const passwordQuery = `UPDATE user_hash SET hash=$1 WHERE user_id=$2`;
      const dbResponse = db.none(passwordQuery, [password, userId]);
      return dbResponse;
   } catch (err) {
      console.log('err: ', err);
      return err;
   }
};

const getGoogleUser = async (email: string) => {
   try {
      const getGoogleUserQuery = `SELECT username, email, user_id FROM users WHERE email=$1`;
      const user = db.oneOrNone(getGoogleUserQuery, email);
      return user;
   } catch (err) {
      console.log('err: ', err);
   }
};

const getUserById = (id: string | number) => {
   return db.any('SELECT username from users where user_id = $1', id);
};
const getHash = (usernameOrEmail: string) => {
   const getHashQuery = `SELECT hash FROM user_hash
                         INNER JOIN users 
                         ON user_hash.user_id = users.user_id
                         WHERE username = $1 
                         OR email = $1`;
   const hash = db.oneOrNone(getHashQuery, usernameOrEmail);
   return hash;
};

export {
   createUser,
   updatePassword,
   getHash,
   getGoogleUser,
   createGoogleUser,
   getUserById,
};
