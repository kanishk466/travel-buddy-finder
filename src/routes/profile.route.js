import express from 'express';


import {getUserProfile, updateUserProfile } from '../controllers/profile.controller.js';
import authMiddleware from '../middleware/authMiddleware.js';
const router = express.Router();

// Get user profile
router.get('/profile', authMiddleware, getUserProfile);

// Update user profile
router.put('/profile', authMiddleware, updateUserProfile);



export default router;