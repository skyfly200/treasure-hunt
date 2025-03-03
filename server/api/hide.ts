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

function findTreasureByCode(code: String) {
  // Find the treasure in the database
  const treasure = {} as Treasure;
  return treasure;
}

function saveTreasure(treasure: Treasure) {
  // Save the treasure to the database
  return false;
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

  // Mark treasure as hidden and start the timer
  treasure.hidden_at = Date.now();
  await saveTreasure(treasure);

  return { message: "Treasure is ready to claim!", treasure };
});
