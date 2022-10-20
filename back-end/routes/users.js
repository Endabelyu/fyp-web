import express from 'express';
import { refreshToken } from '../controllers/refreshToken.js';
import {
  getUser,
  getUsers,
  getUsersPag,
  Login,
  Logout,
  Register,
  UpdatePhoto,
  UpdateUser,
} from '../controllers/userControllers.js';
import { submitMessage } from '../controllers/ContactUsController.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.get('/all_user', getUsers);
router.get('/user/:id', getUser);
router.patch('/user_update/:id', UpdateUser);
router.patch('/user_photo/:id', UpdatePhoto);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
router.get('/users_page/:limit&:page', getUsersPag);

router.post('/submitMessage', submitMessage);

export default router;
