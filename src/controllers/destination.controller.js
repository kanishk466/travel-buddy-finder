import  Destination  from "../models/destination.model.js"

import {asyncHandler}  from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"


// Get all destinations
export const getAllDestinations = asyncHandler (async (req, res) => {
   
        const destinations = await Destination.find();

        if(!destinations){
            throw new ApiError(404,"no destination found")
        }
        res.status(200).json(new ApiResponse(200, destinations , "destination fetched successfully"));
   
});


// Get a single destination by ID
export const getDestinationById = asyncHandler (async (req, res) => {
   

    const destination = await Destination.findById(req.params.id);
    if (!destination) {

        throw new ApiError(404,'Destination not found')
    }
res.status(200).json(new ApiResponse(200, destination , 'successfully fetched destination'))

});

// Create a new destination
export const createDestination = async (req, res) => {
    const { name, description, location, popularActivities } = req.body;
    try {
        const newDestination = new Destination({
            name,
            description,
            location,
            popularActivities
        });
        await newDestination.save();
        res.status(201).json(newDestination);
    } catch (error) {
        res.status(500).json({ message: 'Error creating destination', error });
    }
};

// Update an existing destination
export const updateDestination = async (req, res) => {
    const { id } = req.params;
    const { name, description, location, popularActivities } = req.body;
    try {
        const updatedDestination = await Destination.findByIdAndUpdate(id, {
            name,
            description,
            location,
            popularActivities
        }, { new: true });
        if (!updatedDestination) {
            return res.status(404).json({ message: 'Destination not found' });
        }
        res.status(200).json(updatedDestination);
    } catch (error) {
        res.status(500).json({ message: 'Error updating destination', error });
    }
};

// Delete a destination
export const deleteDestination = async (req, res) => {
    try {
        const deletedDestination = await Destination.findByIdAndDelete(req.params.id);
        if (!deletedDestination) {
            return res.status(404).json({ message: 'Destination not found' });
        }
        res.status(200).json({ message: 'Destination deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting destination', error });
    }
};