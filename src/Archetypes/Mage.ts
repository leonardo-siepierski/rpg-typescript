import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  energyType: EnergyType;
  static counter = 0;

  constructor(name: string) {
    super(name);
    Mage.counter += 1;
    this.energyType = 'mana';
  }

  static createdArchetypeInstances() {
    return this.counter;
  }
}

export default Mage;
