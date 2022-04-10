import Race from './Race';

class Elf extends Race {
  lifePoints = 99;
  static counter = 0;

  constructor(name: string, dex: number) {
    super(name, dex);
    Elf.counter += 1;
  }

  get maxLifePoints(): number {
    return this.lifePoints;
  }

  static createdRacesInstances() {
    return this.counter;
  }
}

export default Elf;
