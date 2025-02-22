import { Router } from 'express';
import { createInvestor, getInvestors } from '../controllers/investorController.js';
const router = Router();

router.post('/', createInvestor);
router.get('/', getInvestors);

export default router;