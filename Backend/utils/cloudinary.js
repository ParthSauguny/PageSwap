const v2 = require('cloudinary');
require('dotenv').config();

v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Takes an in-memory buffer (from multer's memoryStorage) rather than a
// local file path — Vercel's serverless filesystem is read-only outside
// /tmp and ephemeral even there, so nothing here ever touches disk.
async function uploadCloudinary(fileBuffer) {
    if (!fileBuffer) return null;

    return new Promise((resolve) => {
        const uploadStream = v2.uploader.upload_stream(
            { resource_type: "auto" },
            (error, result) => {
                if (error) {
                    console.error("Upload failed.", error);
                    resolve(null);
                    return;
                }
                resolve(result);
            }
        );
        uploadStream.end(fileBuffer);
    });
}

module.exports = uploadCloudinary;