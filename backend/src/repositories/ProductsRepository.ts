import { EntityRepository, Repository } from 'typeorm';
import Product from '../models/Product';

@EntityRepository(Product)
class ProductsRepository extends Repository<Product> {
  public async findAll(): Promise<Product> {
    const findProducts = await this.findAll();

    return findProducts;
  }
}

export default ProductsRepository;
