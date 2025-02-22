import { Router } from 'express';
import { evaluatePitch } from '../controllers/pitchController.js';
const router = Router();

router.post('/', evaluatePitch);

export default router;