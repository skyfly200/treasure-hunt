import { Treasure } from '~/server/types';
import { connectDB } from '~/server/utils/db';
import TreasureSchema from '~/server/models/treasure';

const treasures: Treasure[] = [
    { code: "abcd1234", lat: 40.0150, lng: -105.2705, title: "Boulder", description: "A beautiful city at the foothills of the Rocky Mountains.", hidden_at: 1633035600, found_at: 1633059200, created_at: 1633035600, finder: { userId: 1, username: "User1" }, img: "https://unsplash.it/600/400?random" },
    { code: "efgh5678", lat: 39.7392, lng: -104.9903, title: "Denver", description: "The capital city of Colorado, known for its vibrant culture.", hidden_at: 1633122000, found_at: 1633425600, created_at: 1633122000, finder: { userId: 2, username: "User2" }, img: "https://unsplash.it/600/400?random" },
    { code: "ijkl9012", lat: 39.7555, lng: -105.2211, title: "Golden", description: "A historic city with a rich mining history.", hidden_at: 1633208400, found_at: 1633212000, created_at: 1637208400, finder: { userId: 3, username: "User3" }, img: "https://unsplash.it/600/400?random" },
];

export const saveTreasure = (treasure: Treasure) => {
    // Save the treasure to the database
    if (false) {
        return true;
    }
    return false;
} 
    
export const findTreasureByCode = async (code: String) => {
    await connectDB(); // Ensure DB is connected
    const treasure = await TreasureSchema.findOne({ code });
    // Find the treasure in the database
    // const treasure = treasures.find((t) => t.code === code) as Treasure;
    return treasure ? treasure : null;
}

export const getTreasures = () => {
    // Get all treasure in the database
    return treasures;
}