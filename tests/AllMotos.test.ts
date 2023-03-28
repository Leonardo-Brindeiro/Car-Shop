import { expect } from 'chai';
import { describe, it } from 'mocha';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Motorcycle from '../src/Domains/Motorcycle';
import MotorcycleService from '../src/Services/MotorcycleService';

describe('Teste todas as Motos', function () {
  afterEach(function () {
    Sinon.restore();
  });
  
  it('Deve listar uma Moto', async function () {
    // GIVEN
    const outputMock: Motorcycle[] = [new Motorcycle({
      id: '634852326b35b59438fbea2f',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    })];

    // WHEN
    Sinon.stub(Model, 'find').resolves(outputMock);
    const service = new MotorcycleService();
    const result = await service.getAllid();

    // THEN
    expect(result).to.be.deep.equal(outputMock);
    expect(result.length).to.be.equal(1);
  });
});