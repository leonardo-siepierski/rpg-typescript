import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  player: Fighter;
  monsters: SimpleFighter[];

  constructor(player: Fighter, monsters: SimpleFighter[]) {
    super(player);
    this.player = player;
    this.monsters = monsters;
  }

  verifyHealth(): boolean {
    if (
      this.player.lifePoints > 0
      && this.monsters.some((monster) => monster.lifePoints > 0)
    ) {
      return true;
    }
    return false;
  }

  monsterTurn(): void {
    this.monsters.forEach((monster) => {
      if (monster.lifePoints > 0) {
        monster.attack(this.player);
      }
    });
  }

  playerTurn(): void {
    const livingMonsters = this.monsters.find(
      (monster) => monster.lifePoints > 0,
    );

    if (livingMonsters) {
      this.player.attack(livingMonsters);
    }
  }

  fight(): number {
    while (this.verifyHealth()) {
      this.playerTurn();
      this.monsterTurn();
    }
    if (this.player.lifePoints < 0) {
      return -1;
    }
    return 1;
  }
}

export default PVE;