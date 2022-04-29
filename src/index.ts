import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('John');
const player2 = new Character('Mary');
const player3 = new Character('Paul');
const monster = new Monster();
const dragon = new Dragon();
const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster, dragon]);

for (let i = 0; i < 50; i += 1) {
  player1.levelUp();
}

function runBattles(battles: Battle[]) {
  battles.forEach((player) => player.fight());
}

export { player1, player2, player3, monster, dragon, pvp, pve, runBattles };