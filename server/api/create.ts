import { randomBytes } from "crypto";
import QRCode from "qrcode";

export default defineEventHandler(async (event) => {
    // Generate a short random alphanumeric code (8 characters)
    const shortCode = randomBytes(6).toString("base64url").slice(0, 8); // 8-char safe URL string

    // Store the treasure with the short code
    const treasure = {
        code: shortCode,
        lat: 40.0150,
        lng: -105.2705,
        hidden_at: Date.now(),
        found_at: null,
        finder_id: null,
    };

    // Generate a small QR Code containing only the short code
    const qrCode = await QRCode.toDataURL(shortCode, { errorCorrectionLevel: "H", version: 3 });

    console.log( { treasure, qrCode } );
  })  