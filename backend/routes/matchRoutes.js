import { Router } from 'express';
import { generateMatches, getMatches } from '../controllers/matchController.js';
const router = Router();

router.post('/', generateMatches);
router.get('/', getMatches);

export default router;