import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  protected _lifePoints: number;
  protected _strength: number;

  constructor(lifePoints = 85) {
    this._lifePoints = lifePoints;
    this._strength = 63;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;

    if (this.lifePoints < 1) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}

export default Monster;