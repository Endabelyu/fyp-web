import express from 'express';
import { createProject, findProject, getProject, uploadImage } from '../controllers/ProductController.js';

const router = express.Router();

router.get('/', getProject);
router.get('/:id', findProject);
router.post('/image/:id', uploadImage);
router.post('/create/:id', createProject);

export default router;
