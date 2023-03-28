import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorODM from '../Models/MotorcycleODM';

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
}

export default MotorcycleService;