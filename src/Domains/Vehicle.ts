import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  protected id?: string | undefined;
  protected model: string; 
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;
      
  constructor(vehicle:IVehicle) {
    this.id = vehicle.id;
    this.model = vehicle.model;
    this.year = vehicle.year;
    this.color = vehicle.color;
    this.status = vehicle.status || false;
    this.buyValue = vehicle.buyValue;
  }

  public setId(id: string) {
    this.id = id;
  }

  public getId() {
    return this.id;
  }

  public setModel(Model: string) {
    this.model = Model;
  }

  public getyear() {
    return this.year;
  }

  public setcolor(color: string) {
    this.color = color;
  }

  public getstatus() {
    return this.status;
  }

  public setbuyValue(buyValue: number) {
    this.buyValue = buyValue;
  }
}
    
export default Vehicle;