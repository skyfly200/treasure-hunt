import { saveTreasure, findTreasureByCode } from '~/server/utils/treasure';

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

export default defineEventHandler(async (event) => {
  const code = getRouterParam(event, 'code') as String;

  // Check if code is provided
  if (code == undefined) return { error: "No code provided" };

  // check if code is valid
  if (code == '') return { error: "Empty Code" };
  if (code.length != 8) return { error: "Empty Code" };

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
