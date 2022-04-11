import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  energyType: EnergyType;
  static counter = 0;

  constructor(name: string) {
    super(name);
    Warrior.counter += 1;
    this.energyType = 'stamina';
  }

  static createdArchetypeInstances() {
    return this.counter;
  }
}

export default Warrior;