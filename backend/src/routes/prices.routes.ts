import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import CreatePriceService from '../services/CreatePriceService';
import PricesRepository from '../repositories/PricesRepository';

const pricesRoutes = Router();

pricesRoutes.get('/', async (request, response) => {
  const pricesRepository = getCustomRepository(PricesRepository);
  const prices = await pricesRepository.find({
    select: ['origin', 'destination', 'price'],
  });

  return response.json(prices);
});

pricesRoutes.post('/', async (request, response) => {
  try {
    const { origin, destination, price } = request.body;

    const createPrice = new CreatePriceService();

    const prices = await createPrice.execute({
      origin,
      destination,
      price,
    });

    return response.json(prices);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default pricesRoutes;
