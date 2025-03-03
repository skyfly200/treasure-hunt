export default defineNitroPlugin((nitroApp) => {
    console.log('Nitro plugin', nitroApp);
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
    
    function saveTreasure(treasure: Treasure) {
        // Save the treasure to the database
        if (false) {
            return true;
        }
        return false;
    } 
    
    function findTreasureByCode(code: String) {
        // Find the treasure in the database
        const treasure = {} as Treasure;
        return treasure;
    }
})