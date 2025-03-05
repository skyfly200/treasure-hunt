import { Treasure } from '~/server/types';

const treasures: Treasure[] = [
    { code: "abcd1234", lat: 40.0150, lng: -105.2705, title: "Boulder", description: "A beautiful city at the foothills of the Rocky Mountains.", hidden_at: 1633035600, found_at: 1633039200, created_at: 1633035600, finder: { userId: 1, username: "User1" } },
    { code: "efgh5678", lat: 39.7392, lng: -104.9903, title: "Denver", description: "The capital city of Colorado, known for its vibrant culture.", hidden_at: 1633122000, found_at: 1633125600, created_at: 1633122000, finder: { userId: 2, username: "User2" } },
    { code: "ijkl9012", lat: 39.7555, lng: -105.2211, title: "Golden", description: "A historic city with a rich mining history.", hidden_at: 1633208400, found_at: 1633212000, created_at: 1633208400, finder: { userId: 3, username: "User3" } },
];

export const saveTreasure = (treasure: Treasure) => {
    // Save the treasure to the database
    if (false) {
        return true;
    }
    return false;
} 
    
export const findTreasureByCode = (code: String) => {
    // Find the treasure in the database
    const treasure = treasures.find((t) => t.code === code) as Treasure;
    return treasure ? treasure : null;
}

export const getTreasures = () => {
    // Get all treasure in the database
    return treasures;
}