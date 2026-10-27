import express from 'express';

import {
  signup,
  login,
  logout,
  getProfile,
      getUsers,

} from '../controller/userController.js';

import { protectRoute } from '../middleware/ProtectedRoute.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

router.get('/profile', protectRoute, getProfile);
router.get('/users', protectRoute, getUsers);

export default router;