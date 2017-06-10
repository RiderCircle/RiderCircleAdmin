'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Article Schema
 */
var RidesSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    rideStartDate: {
        type: Date,
        required: true,
    },
    rideEndDate: {
        type: Date,
        required: true,
    },
    itenerary  :{
        type: Array
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

mongoose.model('Rides', RidesSchema);