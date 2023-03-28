import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const motor: IMotorcycle = this.req.body;

    try {
      const newMotor = await this.service.create(motor);
      return this.res.status(201).json(newMotor);
    } catch (error) {
      this.next(error);
    }
  }
  public async getAllid() {
    try {
      const allId = await this.service.getAllid();
      return this.res.status(200).json(allId);
    } catch (error) {
      this.next(error);
    }
  }
 
  public async getbyId() {
    const { id } = this.req.params;

    try {
      const allId = await this.service.getById(id);
      return this.res.status(200).json(allId);
    } catch (error) {
      this.next(error);
    }
  }

  public async getUpId() {
    try {
      const moto = await this.service.getUpId(this.req.params.id, this.req.body);
      return this.res.status(200).json(moto);
    } catch (error) {
      this.next(error);
    }
  }
}

export default MotorcycleController;