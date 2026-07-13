const v2 = require('cloudinary');
const {unlinkSync} = require('fs');
require('dotenv').config();

v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function uploadCloudinary(localfilepath){
    if(!localfilepath) return null;
    try {
        const res = await v2.uploader.upload(localfilepath , {
            resource_type: "auto"
        })
        //file uploaded yayyyy
        unlinkSync(localfilepath);
        console.log("deleted file after upload");
        
        return res;
    } catch (error) {
        console.error("Upload failed, deleting local file.", error);
        try {
            unlinkSync(localfilepath);
        } catch (unlinkError) {
            console.error("Failed to clean up local file after failed upload.", unlinkError);
        }
        return null;
    }
};

module.exports = uploadCloudinary;