import mongoose from "mongoose";


const MatchSchema = new mongoose.Schema({
    user1: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    user2: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    destination: { type: mongoose.Schema.Types.ObjectId, ref: 'Destination', required: true },
    matchDate: { type: Date, default: Date.now },
    status: { type: String, enum: ['pending', 'confirmed'], default: 'pending' }
  });
  
  export default mongoose.model('Match', MatchSchema);