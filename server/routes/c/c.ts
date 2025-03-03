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
  return false;
} 

function findTreasureByCode(code: String) {
  // Find the treasure in the database
  const treasure = {} as Treasure;
  return treasure;
}

export default defineEventHandler(async (event) => {
  const { code, userId } = await readBody(event);


  // Fetch treasure by Code
  const treasure = await findTreasureByCode(code);

  // Check if treasure exists
  if (!treasure) {
    return { error: "Treasure not found." };
  }

  // Check if treasure has already been claimed
  if (treasure.found_at || treasure.finder_id) {
    return { error: "Treasure already claimed." };
  }

  // Mark treasure as claimed
  treasure.found_at = Date.now();
  treasure.finder_id = userId;
  await saveTreasure(treasure);

  return { message: "Treasure claimed!", treasure };
});
