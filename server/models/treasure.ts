import mongoose from 'mongoose';

const TreasureSchema = new mongoose.Schema({
    code: { type: String, unique: true, required: true },
    hidden_at: Date,
    found_at: Date,
    created_at: Date,
    finder: Object,
    title: String,
    description: String,
    img: String,
    lat: Number,
    lng: Number,
});

export default mongoose.models.TreasureSchema || mongoose.model('TreasureSchema', TreasureSchema);
