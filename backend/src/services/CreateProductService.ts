import { getRepository } from 'typeorm';

import Product from '../models/Product';

interface Request {
  package_name: string;
  minutes: number;
}

class CreateProductService {
  public async execute({ package_name, minutes }: Request): Promise<Product> {
    const productsRepository = getRepository(Product);

    const checkProductExists = await productsRepository.findOne({
      where: { package_name },
    });

    if (checkProductExists) {
      throw new Error('Produto já está cadastrado.');
    }

    const product = productsRepository.create({
      package_name,
      minutes,
    });

    await productsRepository.save(product);

    return product;
  }
}

export default CreateProductService;
