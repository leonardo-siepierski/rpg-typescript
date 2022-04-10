import Race from './Race';

class Dwarf extends Race {
  lifePoints = 80;
  static counter = 0;

  constructor(name: string, dex: number) {
    super(name, dex);
    Dwarf.counter += 1;
  }

  get maxLifePoints(): number {
    return this.lifePoints;
  }

  static createdRacesInstances() {
    return this.counter;
  }
}

export default Dwarf;
