import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ApplicationSchema = new Schema({
    companyName: {
        type: String
    },
    jobTitle: {
        type: String
    },
    location: {
        type: String
    },
    link: {
        type: String
    },
    status: {
        type: String,
        enum: ['Applied', 'Interviewing', 'Accepted', 'Rejected']
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});