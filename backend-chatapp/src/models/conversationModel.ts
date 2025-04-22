import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }],
    lastMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message',
    }
}, { timestamps: true});

conversationSchema.index({ sender: 1, receiver: 1 });
conversationSchema.index({ receiver: 1, sender: 1 });

const Conversation = mongoose.model('Conversation', conversationSchema);

export default Conversation;