import { EnergyType } from '../Energy';

abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;

  constructor(name: string) {
    this._name = name;
    this._cost = 0;
    this._special = 0;
  }

  get name() {
    return this._name;
  }

  get cost() {
    return this._cost;
  }

  get special() {
    return this._special;
  }

  static createdArchetypeInstances() {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}

export default Archetype;
