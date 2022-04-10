import Race from './Race';

class Halfling extends Race {
  lifePoints = 60;
  get maxLifePoints(): number {
    return this.lifePoints;
  }
}

export default Halfling;
