import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import CreateProductService from '../services/CreateProductService';
import ProductsRepository from '../repositories/ProductsRepository';

const productsRouter = Router();

productsRouter.get('/', async (request, response) => {
  const productsRepository = getCustomRepository(ProductsRepository);
  const products = await productsRepository.find({
    select: ['package_name', 'minutes'],
  });

  return response.json(products);
});

productsRouter.post('/', async (request, response) => {
  try {
    const { package_name, minutes } = request.body;

    const createProduct = new CreateProductService();

    const product = await createProduct.execute({
      package_name,
      minutes,
    });

    return response.json(product);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default productsRouter;
