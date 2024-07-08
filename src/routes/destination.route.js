// routes/destinationRoutes.js

import express from 'express';
import {
    getAllDestinations,
    getDestinationById,
    createDestination,
    updateDestination,
    deleteDestination
} from '../controllers/destination.controller.js';

const router = express.Router();

// Get all destinations
router.get('/', getAllDestinations);

// Get a single destination by ID
router.get('/:id', getDestinationById);

// Create a new destination
router.post('/', createDestination);

// Update an existing destination
router.put('/:id', updateDestination);

// Delete a destination
router.delete('/:id', deleteDestination);

export default router;
