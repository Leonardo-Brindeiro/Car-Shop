import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;
  
  constructor(moto:IMotorcycle) {
    super({
      id: moto.id,
      model: moto.model,
      color: moto.color,
      year: moto.year,
      status: moto.status,
      buyValue: moto.buyValue,
    });

    this.category = moto.category;
    this.engineCapacity = moto.engineCapacity;
  }
}
  
export default Motorcycle;