import Race from './Race';

class Dwarf extends Race {
  lifePoints = 80;
  get maxLifePoints(): number {
    return this.lifePoints;
  }
}

export default Dwarf;
