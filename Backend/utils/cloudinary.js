const v2 = require('cloudinary');
const {unlinkSync} = require('fs');
require('dotenv').config();

v2.config({
    cloud_name: process.env.COUDINARY_CLOUD_NAME,
    api_key: process.env.COUDINARY_API_KEY,
    api_secret: process.env.COUDINARY_API_SECRET,
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
        return null;
    }
};

module.exports = uploadCloudinary;