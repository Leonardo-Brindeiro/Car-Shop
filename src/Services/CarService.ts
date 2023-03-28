import { isValidObjectId } from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import ErrorCustom from '../utils/Error';

class CarService {
  private createCarDomain(car: ICar | null) {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(car: ICar):Promise<Car | null> {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }
  public async getAllid():Promise<(Car | null)[]> {
    const ids = new CarODM();
    const result = await ids.getallId();
    return result.map((e) => this.createCarDomain(e));
  }
  public async getById(id: string):Promise<Car | null> {
    if (!isValidObjectId(id)) throw new ErrorCustom(422, 'Invalid mongo id');
    const ids = new CarODM();
    const result = await ids.getById(id);
    if (!result) throw new ErrorCustom(404, 'Car not found');
    return this.createCarDomain(result);
  }
  public async getUpId(id: string, obj: ICar):Promise<Car | null> {
    await this.getById(id);
    const ids = new CarODM();
    
    const result = await ids.update(id, obj);
    return this.createCarDomain(result);
  }
}

export default CarService;