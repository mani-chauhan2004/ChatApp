import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    conversation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conversation',
        required : true,
    },
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }, 
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['not sent', 'sent', 'delivered', 'read'],
        default: 'not sent',
        required: true,
    }
},{ timestamps: true });

const Message = new mongoose.Model('Message', messageSchema);

export default Message;