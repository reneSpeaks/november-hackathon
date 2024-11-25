import express from 'express';
import { register } from '../controller/user.js';
import { validateUser } from '../middleware/validateRequest.js';

const router = express.Router();

router
.route('/')
.post(validateUser, register);

export default router;