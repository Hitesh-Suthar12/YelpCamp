// Importing necessary dependencies
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Configuring Cloudinary
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_KEY,
//   api_secret: process.env.CLOUDINARY_SECRET,
// });

cloudinary.config({
  cloud_name: "dz1r7lx8b",
  api_key: "992153334761957",
  api_secret: "gqzw4KalFNMllyS6xRVUY5ExJ-0",
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "YelpCamp",
    allowedFormats: ["jpeg", "png", "jpg"],
  },
});

module.exports = {
  cloudinary,
  storage,
};
