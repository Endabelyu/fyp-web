import express from 'express';
import {
  createProject,
  deleteImage,
  deleteProject,
  findProject,
  getImage,
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
router.delete('/:id', deleteProject);
router.patch('/image/:id', uploadImage);
router.delete('/image/:id', deleteImage);
router.get('/image/:id', getImage); 
router.post('/create/:id', createProject);
router.get('/project_page/:limit&:page', getProjectPage);
router.get('/project_main/:limit&:page&:id', getProjectMain);

export default router;
