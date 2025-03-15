import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    isGroupChat: {
        type: Boolean,
        required: true,
    },
    groupName: {
        type: String
    },
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    lastMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message',
    }
}, { timestamps: true});

const Conversation = mongoose.model('Conversation', conversationSchema);

export default Conversation;