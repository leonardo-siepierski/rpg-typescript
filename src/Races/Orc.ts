import Race from './Race';

class Orc extends Race {
  lifePoints = 74;
  static counter = 0;

  constructor(name: string, dex: number) {
    super(name, dex);
    Orc.counter += 1;
  }

  get maxLifePoints(): number {
    return this.lifePoints;
  }

  static createdRacesInstances() {
    return this.counter;
  }
}

export default Orc;
