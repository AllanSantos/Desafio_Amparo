import { getRepository } from 'typeorm';
import Product from '../models/Product';
import Price from '../models/Price';

interface Request {
  origin: string;
  destination: string;
  package_name: string;
  time: number;
}

interface Response {
  withPlan: string;
  withoutPlan: string;
}

class CreateSimulationService {
  public async execute({
    origin,
    destination,
    package_name,
    time,
  }: Request): Promise<Response> {
    const pricesRepository = getRepository(Price);
    const productsRepository = getRepository(Product);

    const prices = await pricesRepository.findOne({
      select: ['price'],
      where: { origin, destination },
    });

    const product = await productsRepository.findOne({
      select: ['minutes'],
      where: { package_name },
    });

    let withPlan = '-';
    let withoutPlan = '-';

    if (prices === undefined) {
      return {
        withPlan,
        withoutPlan,
      };
    }

    const price = parseFloat(prices.price).toFixed(2);

    if (time < product.minutes) {
      withPlan = '0.00';
      withoutPlan = (price * time).toFixed(2);
    } else {
      withPlan = (price * (time - product.minutes) * 1.1).toFixed(2);
      withoutPlan = (price * time).toFixed(2);
    }

    if (withPlan === 'NaN') {
      withPlan = '-';
    }

    if (withoutPlan === 'NaN') {
      withoutPlan = '-';
    }

    return {
      withPlan,
      withoutPlan,
    };
  }
}

export default CreateSimulationService;
