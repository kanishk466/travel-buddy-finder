// routes/matchRoutes.js

import express from 'express';
import { getUserMatches, createMatch, updateMatchStatus } from '../controllers/match.controller.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Get all matches for a user
router.get('/', authMiddleware, getUserMatches);

// Create a new match
router.post('/', authMiddleware, createMatch);

// Update match status
router.put('/:id', authMiddleware, updateMatchStatus);

export default router;
