import express, { json } from 'express';
import morgan from 'morgan';

//importing routes
import productRoutes from './routes/product';
import taxRoutes from './routes/tax';
import range_taxRoutes from './routes/range_tax';


//initialization
const app = express();


//middewares
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/products',productRoutes);
app.use('/api/taxs',taxRoutes);
app.use('/api/range_taxs',range_taxRoutes);

export default app;