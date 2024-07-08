

import bcrypt from "bcrypt"

import jwt from "jsonwebtoken"

import User from "../models/user.model.js"



export const registerUser  = async (req,res)=>{
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({ ...req.body, password: hashedPassword });
        const savedUser = await user.save();
        res.status(201).json(savedUser);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
}

export const loginUser = async (req,res)=>{
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(404).json({ message: 'User not found' });
    
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).json({ message: 'Invalid password' });
    
        const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });
        res.json({ token, user });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
}

