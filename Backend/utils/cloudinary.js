const v2 = require('cloudinary');
const fs = require('fs');
require('dotenv').config();

v2.config({
    cloud_name: process.env.COUDINARY_CLOUD_NAME,
    api_key: process.env.COUDINARY_API_KEY,
    api_secret: process.env.COUDINARY_API_SECRET,
});

const uploadCloudinary = async(localfilepath) => {
    if(!localfilepath) return null;
    try {
        const res = await v2.uploader.upload(localfilepath , {
            resource_type: "auto"
        })
        //file uploaded yayyyy
        console.log("uploaded yayyyy");
        return res;
    } catch (error) {
        fs.unlinkSync(localfilepath); //since upload got failed, we delete the temp img file from server
        return null;
    }
}

module.export = uploadCloudinary;