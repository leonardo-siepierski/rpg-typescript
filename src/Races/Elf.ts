import Race from './Race';

class Elf extends Race {
  lifePoints = 99;
  get maxLifePoints(): number {
    return this.lifePoints;
  }
}

export default Elf;
