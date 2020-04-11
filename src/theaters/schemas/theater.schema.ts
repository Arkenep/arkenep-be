import * as mongoose from "mongoose";

export const TheaterSchema = new mongoose.Schema({
    theaterId: Number,
    location: {
        address: {
            street1: String,
            city: String,
            state: String,
            zipcode: String,
        },
        
    },
    geo: {
        type: String,
        coordinates: [String],
    },
})
