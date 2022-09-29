import express from 'express';
import {
  createProject,
  findProject,
  getProject,
  haveProject,
  uploadImage,
} from '../controllers/projectController.js';

const router = express.Router();

router.get('/', getProject);
router.get('/have/:id', haveProject);
router.get('/:id', findProject);
router.post('/image/:id', uploadImage);
router.post('/create/:id', createProject);

export default router;
