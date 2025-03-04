import { randomBytes } from "crypto";
import QRCode from "qrcode";
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
    // Generate a short random alphanumeric code (8 characters)
    const shortCode = randomBytes(6).toString("base64url").slice(0, 8); // 8-char safe URL string

    // Store the treasure with the short code
    const treasure: Treasure = {
        code: shortCode,
        lat: 40.0150,
        lng: -105.2705,
        created_at: Date.now(),
        hidden_at: null,
        found_at: null,
        finder_id: null,
    };

    // Save the treasure to the database
    await saveTreasure(treasure);

    // Generate a small QR Code containing only the short code
    const qrCode = await QRCode.toDataURL(shortCode, { errorCorrectionLevel: "H", version: 3 });

    console.log( { treasure, qrCode } );
  })  