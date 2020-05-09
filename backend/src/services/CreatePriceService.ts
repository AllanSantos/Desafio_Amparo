import { getRepository } from 'typeorm';

import Price from '../models/Price';

interface Request {
  origin: string;
  destination: string;
  price: number;
}

class CreatePriceService {
  public async execute({
    origin,
    destination,
    price,
  }: Request): Promise<Price> {
    const pricesRepository = getRepository(Price);

    const checkPricesExists = await pricesRepository.findOne({
      where: { origin, destination },
    });

    if (checkPricesExists) {
      throw new Error('Modelo de preço já está cadastrado.');
    }

    const prices = pricesRepository.create({
      origin,
      destination,
      price,
    });

    await pricesRepository.save(prices);

    return prices;
  }
}

export default CreatePriceService;
