import express from 'express';
import { refreshToken } from '../controllers/refreshToken.js';
import {
  getUser,
  getUsers,
  getUsersPag,
  Login,
  Logout,
  Register,
} from '../controllers/userControllers.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.get('/user/:id', getUser);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
router.get('/users_page/:limit&:page', getUsersPag);

export default router;
