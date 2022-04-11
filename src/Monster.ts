import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

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

  receiveDamage(attackPoints: number): void {
    if (attackPoints > 0) {
      this._lifePoints -= attackPoints;
    }

    if (attackPoints > this.lifePoints) {
      this._lifePoints = -1;
    }
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}

export default Monster;