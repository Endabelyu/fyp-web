import express from 'express';
import {
  createProject,
  findProject,
  getProject,
  getProjectMain,
  getProjectPage,
  haveProject,
  uploadImage,
} from '../controllers/projectController.js';
import { verifyToken } from '../middleware/verifyToken.js';
const router = express.Router();

router.get('/', getProject);
router.get('/have/:id',verifyToken, haveProject);
router.get('/:id', findProject);
router.post('/image/:id', uploadImage);
router.post('/create/:id', createProject);
router.get('/project_page/:limit&:page', getProjectPage);
router.get('/project_main/:limit&:page&:id', getProjectMain);

export default router;
