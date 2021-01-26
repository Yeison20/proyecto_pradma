import { Router } from 'express';
const router = Router();

import { createTax, getTax } from '../controllers/tax.controllers';

router.post('/', createTax);
router.get('/', getTax);

export default router;