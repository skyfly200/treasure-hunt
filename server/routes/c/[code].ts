import { saveTreasure, findTreasureByCode } from '~/server/utils/treasure';

export default defineEventHandler(async (event) => {
  const code = getRouterParam(event, 'code') as String;
  const { userId } = await readBody(event);

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
