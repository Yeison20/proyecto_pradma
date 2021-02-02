import { Router } from 'express';
const router = Router();

import { createProduct, getProducts, getOneProduct, createProductTest, create , calculo} from '../controllers/product.controller';

// /api/product
//router.post('/', createProduct);
router.get('/', getProducts);
router.post('/', calculo);


// /api/products/:productID
//router.get('/:id', getOneProduct );




export default router;