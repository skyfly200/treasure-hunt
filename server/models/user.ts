import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    user_id: { type: String, unique: true, required: true },
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
