import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
  creator: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  password: String,
  createdAt: Date,
  description: String
})

export default mongoose.model('Room',RoomSchema);