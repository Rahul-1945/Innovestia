import { Router } from 'express';
import { createStartup, getStartups, getStartupById } from '../controllers/startupController.js';
const router = Router();

router.post('/', createStartup);
router.get('/', getStartups);
router.get('/:id', getStartupById);

export default router;