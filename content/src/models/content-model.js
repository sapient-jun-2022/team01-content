import mongoose from 'mongoose';

const Schema = mongoose.Schema;


export const ContentSchema = new Schema({

    title: {
        type: String,
        required: "Please enter first name"
    },
    
    hashtag: {
        type: String,
        
    },
    description: {
        type: String,
    },
    video_link: {
        type: String,
    },
    video_running_time: {
        type: Number
    },
    video_max_time_limit: {
        type: Number,
        default: 300
    },
    region_availablity: {
        type: String,
    },
    uploaded_date: {
        type: Date,
        default: Date.now
    },
    content_type: {
        type: String,
        enum: ["sports","comedy","horror","dance"],
        default: "sports"
    },
    language:{
        type: String
    }
        
});
