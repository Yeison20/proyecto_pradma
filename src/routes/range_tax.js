import { Router } from 'express';
const router = Router();

import { createRange_tax, create , getRange_tax} from '../controllers/range_tax.controllers';
import Range_Tax from '../models/Range_Tax';


router.post('/', createRange_tax);
//router.post('/', create);
//router.get('/', getRange_tax);

export default router;