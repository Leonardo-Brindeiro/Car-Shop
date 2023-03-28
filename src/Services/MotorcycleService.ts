import { isValidObjectId } from 'mongoose';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorODM from '../Models/MotorcycleODM';
import ErrorCustom from '../utils/Error';

class MotorcycleService {
  private createMotorDomain(motor: IMotorcycle | null) {
    if (motor) {
      return new Motorcycle(motor);
    }
    return null;
  }

  public async create(motor: IMotorcycle):Promise<Motorcycle | null> {
    const motorODM = new MotorODM();
    const newMotor = await motorODM.create(motor);
    return this.createMotorDomain(newMotor);
  }
  public async getAllid():Promise<(Motorcycle | null)[]> {
    const ids = new MotorODM();
    const result = await ids.getallId();
    return result.map((e) => this.createMotorDomain(e));
  }
  public async getById(id: string):Promise<Motorcycle | null> {
    if (!isValidObjectId(id)) throw new ErrorCustom(422, 'Invalid mongo id');
    const ids = new MotorODM();
    const result = await ids.getById(id);
    if (!result) throw new ErrorCustom(404, 'Motorcycle not found');
    return this.createMotorDomain(result);
  }
}

export default MotorcycleService;