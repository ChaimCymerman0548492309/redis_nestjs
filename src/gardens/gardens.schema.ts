/* eslint-disable prettier/prettier */

import * as mongoose from 'mongoose';


export const GardenSchema = new mongoose.Schema({
    name: String,
    description: String,
    contactPerson: {
        name: String,
        phoneNumber: String,
    },
    gardener: {
        name: String,
        phone: String,
        rating: Number,
        gardnerImage: String,
    },
    parkSize: Number,
    vegetation: String,
    type: String,
    treatment: {
        grassTrimming: Boolean,
        treePruning: Boolean,
        pestControl: Boolean,
    },
    coordinates: [Number],
    address: {
        street: String,
        city: String,
    },
    gardenImages: [String],
    gardenImagesAlt: String,
}, { versionKey: false });
