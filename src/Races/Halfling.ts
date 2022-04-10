import Race from './Race';

class Halfling extends Race {
  lifePoints = 60;
  static counter = 0;

  constructor(name: string, dex: number) {
    super(name, dex);
    Halfling.counter += 1;
  }

  get maxLifePoints(): number {
    return this.lifePoints;
  }

  static createdRacesInstances() {
    return this.counter;
  }
}

export default Halfling;
