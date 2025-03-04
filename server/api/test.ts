import { saveTreasure, findTreasureByCode } from '~/server/utils/treasure';

export default defineEventHandler(async (event) => {
  const { code } = await readBody(event);

  // Fetch treasure by Code
  const treasure = await findTreasureByCode(code);

  // Check if treasure exists
  if (!treasure) {
    return { error: "Treasure not found." };
  }

  // Check if treasure has already been hidden
  if (treasure.hidden_at == null) {
    return { error: "Treasure not hidden yet." };
  }

  // Check if treasure has already been claimed
  if (treasure.found_at || treasure.finder_id) {
    return { error: "Treasure already claimed." };
  }

  return { message: "Treasure is live and ready to claim!", treasure };
});
