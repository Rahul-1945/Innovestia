import express from 'express';
import { signup, login } from '../controllers/authController.js';

const router = express.Router();

// @route   POST /api/auth/signup
// @desc    Register a new user
// @access  Public
router.post('/signup', signup);

// @route   POST /api/auth/login
// @desc    Login existing user
// @access  Public
router.post('/login', login);

export default router;
