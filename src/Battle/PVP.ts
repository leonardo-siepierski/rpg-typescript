import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  player1: Fighter;
  player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this.player1 = player1;
    this.player2 = player2;
  }

  fight(): number {
    while (this.player1.lifePoints > 0 && this.player2.lifePoints > 0) {
      this.player1.attack(this.player2);
      if (this.player2.lifePoints > 0) {
        this.player2.attack(this.player1);
      }
    }
    if (this.player1.lifePoints < 0) {
      return -1;
    }
    return 1;
  }
}

export default PVP;