import Race from './Race';

class Dwarf extends Race {
  lifePoints = 80;
  counter = 0;

  get maxLifePoints(): number {
    return this.lifePoints;
  }

  createdRacesInstances(): number {
    this.counter += 1;
    return this.counter;
  }
}

export default Dwarf;
