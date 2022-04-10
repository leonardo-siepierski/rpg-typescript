import Race from './Race';

class Orc extends Race {
  lifePoints = 74;
  get maxLifePoints(): number {
    return this.lifePoints;
  }
}

export default Orc;
