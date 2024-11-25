import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import router from "./routes/index.js";
import { errorHandler } from "./middleware/errorHandler.js";

import "./db.js";
import { fileHandler } from './middleware/fileHandler.js';

const db = express();
const PORT = process.env.PORT ?? 3000;

db.use(cors());
db.use(express.json());
db.use(morgan('dev'));

db.use(express.static('upload'))

db.use('/api', router);
db.use(errorHandler);

db.get('/', (req, res) => {
  res.status(404).send("Not found");
})

db.post('/file/upload', fileHandler.single('file'), (req, res) => {
  console.log(req.file);
  res.json({ url: req.file.filename });
})

db.listen(PORT, () => {
  console.log(`Server with Database is listening on http://localhost:${PORT}`);
});