import { Router } from 'express';
import productsRouter from './products.routes';
import pricesRouter from './prices.routes';
import simulationsRouter from './simulations.routes';

const routes = Router();

routes.use('/products', productsRouter);

routes.use('/prices', pricesRouter);

routes.use('/simulations', simulationsRouter);

export default routes;
