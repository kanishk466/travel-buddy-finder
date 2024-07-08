
import Message from '../models/message.model.js';

// Get all messages for a match
export const getMatchMessages = async (req, res) => {
    try {
        const messages = await Message.find({ match: req.params.matchId })
            .populate('sender receiver');
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching messages', error });
    }
};

// Send a message
export const sendMessage = async (req, res) => {
    const { match, sender, receiver, content } = req.body;
    try {
        const newMessage = new Message({ match, sender, receiver, content });
        await newMessage.save();
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({ message: 'Error sending message', error });
    }
};
