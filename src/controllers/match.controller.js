// controllers/matchController.js

import Match from '../models/match.model.js';

// Get all matches for a user
export const getUserMatches = async (req, res) => {
    try {
        const matches = await Match.find({ $or: [{ user1: req.userId }, { user2: req.userId }] })
            .populate('user1 user2 destination');
        res.status(200).json(matches);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching matches', error });
    }
};

// Create a new match
export const createMatch = async (req, res) => {
    const { user1, user2, destination } = req.body;
    try {
        const newMatch = new Match({ user1, user2, destination });
        await newMatch.save();
        res.status(201).json(newMatch);
    } catch (error) {
        res.status(500).json({ message: 'Error creating match', error });
    }
};

// Update match status
export const updateMatchStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const match = await Match.findByIdAndUpdate(id, { status }, { new: true });
        if (!match) {
            return res.status(404).json({ message: 'Match not found' });
        }
        res.status(200).json(match);
    } catch (error) {
        res.status(500).json({ message: 'Error updating match', error });
    }
};
