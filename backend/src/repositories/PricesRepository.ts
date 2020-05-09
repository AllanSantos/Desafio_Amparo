import { EntityRepository, Repository } from 'typeorm';
import Price from '../models/Price';

@EntityRepository(Price)
class PricesRepository extends Repository<Price> {
  public async findAll(): Promise<Price> {
    const findPrices = await this.findAll();

    return findPrices;
  }
}

export default PricesRepository;
