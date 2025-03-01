// define treasure type
type Treasure = {
  code: string;
  lat: number;
  lng: number;
  hidden_at: number;
  found_at: number | null;
  finder_id: string | null;
};

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

  return { message: "Treasure is ready to claim!", treasure };
});
