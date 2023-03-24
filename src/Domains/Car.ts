import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;
  
  constructor(car:ICar) {
    super({
      id: car.id,
      model: car.model,
      color: car.color,
      year: car.year,
      status: car.status,
      buyValue: car.buyValue,
    });

    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }
  public setdoorsQty(doorsQty: number) {
    this.doorsQty = doorsQty;
  }

  public getdoorsQty() {
    return this.doorsQty;
  }

  public setseatsQty(seatsQty: number) {
    this.seatsQty = seatsQty;
  }

  public getseatsQty() {
    return this.seatsQty;
  }
}
  
export default Car;