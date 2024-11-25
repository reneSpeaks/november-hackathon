import express from 'express';
import { dynamicModelMiddleware } from '../middleware/dynamicModel.js';
import { pagination } from '../middleware/pagination.js';
import { authenticate } from '../middleware/authenticate.js';
import { validateRequest } from '../middleware/validateRequest.js';
import { createOne, deleteOne, findAll, findOneById, updateOne } from '../controller/CRUD.js';
import userRouter from './userRouter.js';
import authRouter from './authRouter.js';

const router = express.Router();

router.use("/auth", authRouter);
router.use("/users", userRouter);

router.use("/:model", dynamicModelMiddleware)

router
.route("/:model")
.get(pagination, findAll)
.post(authenticate, validateRequest, createOne);

router
.route("/:model/:id")
.get(findOneById)
.put(authenticate, validateRequest, updateOne)
.delete(authenticate, deleteOne);

export default router;