import express from 'express';
import { getContact, updateContact } from '../controllers/ContactController.js';

const router = express.Router();

router.get('/', getContact);
router.put('/:id', updateContact);

export default router;
