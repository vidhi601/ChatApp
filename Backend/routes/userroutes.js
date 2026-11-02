import express from 'express';

import {
  signup,
  login,
  logout,
  getProfile,
      getUsers,

} from '../controller/userController.js';

import { ProtectedRoute } from '../middleware/ProtectedRoute.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

router.get('/profile', ProtectedRoute, getProfile);
router.get('/users', ProtectedRoute, getUsers);

export default router;