import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  energyType: EnergyType;
  static counter = 0;

  constructor(name: string) {
    super(name);
    Necromancer.counter += 1;
    this.energyType = 'mana';
  }

  static createdArchetypeInstances() {
    return this.counter;
  }
}

export default Necromancer;