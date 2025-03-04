import { Treasure } from '~/server/types';

export const saveTreasure = (treasure: Treasure) => {
    // Save the treasure to the database
    if (false) {
        return true;
    }
    return false;
} 
    
export const findTreasureByCode = (code: String) => {
    // Find the treasure in the database
    const treasure = {} as Treasure;
    return treasure;
}

export const getTreasures = () => {
    // Get all treasure in the database
    return [
        { id: 1, lat: 40.0150, lng: -105.2705, title: "Boulder", description: "A beautiful city at the foothills of the Rocky Mountains.", hidden: 1633035600, found: 1633039200, finder: { userId: 1, username: "User1" } },
        { id: 2, lat: 39.7392, lng: -104.9903, title: "Denver", description: "The capital city of Colorado, known for its vibrant culture.", hidden: 1633122000, found: 1633125600, finder: { userId: 2, username: "User2" } },
        { id: 3, lat: 39.7555, lng: -105.2211, title: "Golden", description: "A historic city with a rich mining history.", hidden: 1633208400, found: 1633212000, finder: { userId: 3, username: "User3" } },
    ];
}