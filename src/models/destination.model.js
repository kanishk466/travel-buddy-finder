import mongoose from "mongoose";

const DestinationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    location: {
      city: { type: String },
      country: { type: String },
      coordinates: {
        lat: { type: Number },
        lng: { type: Number }
      }
    },
    popularActivities: [String],
    createdAt: { type: Date, default: Date.now }
  });


  export default mongoose.model("Destination",DestinationSchema);
