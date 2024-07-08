import User from "../models/user.model.js";

// Get user profile
export const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.userId).populate('travelPreferences.destinations');
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user profile', error });
    }
};

// Update user profile
export const updateUserProfile = async (req, res) => {
    const { profilePicture, bio, travelPreferences } = req.body;
    try {
        const user = await User.findById(req.userId);
        user.profilePicture = profilePicture || user.profilePicture;
        user.bio = bio || user.bio;
        user.travelPreferences = travelPreferences || user.travelPreferences;
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error updating user profile', error });
    }
};