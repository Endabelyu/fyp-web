import express from 'express';
import { getContact, updateContact } from '../controllers/ContactController/';

const router = express.Router();

router.get('/', getContact);
router.put('/', updateContact);

export default router;
