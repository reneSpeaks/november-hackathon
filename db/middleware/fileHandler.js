import multer from 'multer';
import { ErrorResponse } from '../utils/ErrorResponse.js';

const storage = multer.diskStorage({
  destination: "upload",
  filename: function (req, file, callback) {
    const timestamp = new Date().getTime().toString();
    callback(null, timestamp + file.originalname);
  },
});

const fileFilter = (req, file, callback) => {
  const allowedTypes = ["jpeg", "jpg", "png", "gif"];

  if (allowedTypes.includes(file.mimetype.split("/")[1])) {
    return callback(null, true);
  } else {
    callback(new ErrorResponse("Error: Images Only!", 415));
  }
};

export const fileHandler = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 1024 * 1024 * 10 },
});
