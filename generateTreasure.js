import { randomBytes } from "crypto";
import QRCode from "qrcode";

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

// Generate a URL from the short code
const url = `https://find.io/${shortCode}`;

// Generate a small QR Code containing only the short code
const qrCode = await QRCode.toDataURL(url, { errorCorrectionLevel: "Q", version: 3 });

console.log( { treasure, qrCode } );

// Save the QR code data URL to a file
QRCode.toFile("QR.png", url, { errorCorrectionLevel: "Q", version: 3 }, function (err) {
  if (err) throw err;
  console.log("QR code saved to QR.png");
});