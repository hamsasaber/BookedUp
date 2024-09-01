//imports
const multer = require("multer");
const path = require("path");

const generateStorage = (destination) =>
  multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, destination);
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });

// Function to validate the file types
const fileFilter = (file, cb) => {
  const fileTypes = /jpeg|jpg|png|gif/;
  const mimeType = fileTypes.test(file.mimetype); //validates types of images
  const extname = fileTypes.test(path.extname(file.originalname));

  if (mimeType && extname) {
    cb(null, true);
  } else {
    cb("Incompatible Image type");
  }
};

// Storage configurations
const storage = generateStorage("images"); //stores the images fy folder images

const upload = multer({
  storage: storage,
  limits: { fileSize: 5000000 }, //5Mb limit
  fileFilter: (req, file, cb) => fileFilter(file, cb),
}).fields([
  { name: "coverImage", maxCount: 1 },
  { name: "path", maxCount: 1 },
  { name: "profilePicture", maxCount: 1 },
]);

module.exports = { upload };
