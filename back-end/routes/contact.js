import express from 'express';
import { getContact, updateContact } from '../controllers/ContactController.js';

const router = express.Router();

router.get('/:id', getContact);
router.patch('/:id', updateContact);

export default router;
