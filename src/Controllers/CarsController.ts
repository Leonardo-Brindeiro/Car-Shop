import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = this.req.body;
    // const car: ICar = {
    //   model: this.req.body.model,
    //   year: this.req.body.year,
    //   buyValue: this.req.body.buyValue,
    //   color: this.req.body.color,
    //   doorsQty: this.req.body.doorsQty,
    //   seatsQty: this.req.body.seatsQty,
    //   status: this.req.body.status,
    // };

    try {
      const newCar = await this.service.create(car);
      return this.res.status(201).json(newCar);
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

  // ajuda de deborah cristina
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
      const car = await this.service.getUpId(this.req.params.id, this.req.body);
      return this.res.status(200).json(car);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;
