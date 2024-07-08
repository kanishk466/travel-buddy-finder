import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String },
    bio: { type: String },
    travelPreferences: {
      destinations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Destination' }],
      interests: [String],
      availableDates: {
        startDate: { type: Date },
        endDate: { type: Date }
      }
    },
    matches: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Match' }],
    createdAt: { type: Date, default: Date.now }
  });


  export default mongoose.model("User",UserSchema);