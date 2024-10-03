const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null , './uploads/book-cover')
    },
    filename: function(req,file,cb){
        const uniqueSuffix = Math.round(Math.random()*1e9) + '_' + Date.now()
        cb(null , file.originalname + '-' + uniqueSuffix);
    }
})

export const upload = multer({storage: storage});