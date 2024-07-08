// routes/messageRoutes.js

import express from 'express';
import { getMatchMessages, sendMessage } from '../controllers/message.controller.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Get all messages for a match
router.get('/:matchId', authMiddleware, getMatchMessages);

// Send a message
router.post('/', authMiddleware, sendMessage);

export default router;
