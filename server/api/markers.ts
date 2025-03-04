import { getTreasures } from '~/server/utils/treasure';

/**
 * 
 * Handles the event to return a list of treasure markers.
 * 
 * @module api/markers - API to fetch markers for the map page
 * 
 * @param event - The event object.
 * @returns An array of marker objects, each containing:
 * - `id`: The unique identifier of the marker.
 * - `lat`: The latitude of the marker.
 * - `lng`: The longitude of the marker.
 * - `title`: The title or name of the location.
 * - `hidden`: The timestamp when the treasure was hidden.
 * - `found`: The timestamp when the treasure was found.
 * - `finder`: The name of the user who found the treasure.
 */
export default defineEventHandler(async (event) => {
  const treasures = await getTreasures();
  return treasures;
});
  