import { saveTreasure, findTreasureByCode } from '~/server/utils/treasure';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const code = query.code as String;

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
