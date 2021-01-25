import { Router } from 'express';
const router = Router();

import { createProduct, getProducts, getOneProduct, createProductTest, create } from '../controllers/product.controller';

// /api/product
router.post('/', createProduct);
router.get('/', getProducts);


// /api/products/:productID
//router.get('/:id', getOneProduct );




export default router;