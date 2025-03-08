import { randomBytes } from "crypto";
import QRCode from "qrcode";
import { saveTreasure, findTreasureByCode } from '~/server/utils/treasure';
import { Treasure } from '~/server/types';

export default defineEventHandler(async (event) => {
    // Generate a short random alphanumeric code (8 characters)
    const shortCode = randomBytes(6).toString("base64url").slice(0, 8); // 8-char safe URL string

    const query = getQuery(event);
    const title = query.title as string;
    const description = query.description as string;
    const lat = query.lat as number;
    const lng = query.lng as number;

    // Store the treasure with the short code
    const treasure: Treasure = {
        code: shortCode,
        title: title,
        description: description,
        img: null,
        lat: lat,
        lng: lng,
        created_at: Date.now(),
        hidden_at: null,
        found_at: null,
        finder: null,
    };

    // Save the treasure to the database
    await saveTreasure(treasure);

    // Generate a small QR Code containing only the short code
    const qrCode = await QRCode.toDataURL(shortCode, { errorCorrectionLevel: "H", version: 3 });

    console.log( { treasure, qrCode } );
  })  