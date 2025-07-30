const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');

//configure 
cloudinary.config({
    cloud_name: process.env.COLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});
if (!process.env.CLOUDINARY_API_KEY) {
  console.warn('Missing Cloudinary API key!');
}


function uploadMediaToCloudinary(buffer) {
  return new Promise((resolve, reject) => {
    let stream = cloudinary.uploader.upload_stream(
      { resource_type: "auto" },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );
    streamifier.createReadStream(buffer).pipe(stream);
  });
}


const deleteMediaFromCloudinary = async (publicId)=>{
    try {
        
        await cloudinary.uploader.destroy(publicId);

    } catch (error) {
        console.log(error);
        throw new Error('Failed to delete file from cloudinary');
    }
}

module.exports = {uploadMediaToCloudinary, deleteMediaFromCloudinary};