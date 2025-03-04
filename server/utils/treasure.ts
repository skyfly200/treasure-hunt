// define treasure type
type Treasure = {
    code: string;
    lat: number;
    lng: number;
    created_at: number;
    hidden_at: number | null;
    found_at: number | null;
    finder_id: string | null;
};

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
