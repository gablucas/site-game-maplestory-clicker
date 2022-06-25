// Atualizar a HUD inicialmente
hud.atualizar();

function battle() {

  mostrarDano();  // Exibe o dano desferido ao monstro
  monsterDamage();  // Dano ao monstro
  playerDamage(); // Dano ao player

  // Ação quando o monstro morre
  if(monsterHP <= 0) {

      showReward(); // Mostra o XP e GOLD
      player.earnReward() // Ganha XP e GOLD
      monsterReborn();  // Nasce um novo monstro
      
    // Ação quando sobe de level
    if(player.xpCurrent >= player.xpNextLevel()) {
      player.levelUP(); // Sobre o level do player
    }

    // Verifica se o proximo monstro tem o mesmo level que o persosagem
    if(indexMonster + 1 < monstros.length && player.level >= monstros[indexMonster + 1].level) {
      activeRightArrow();
    }
  }

  hud.atualizar();  // Atualiza os eventos no HUD
}

  monstro.addEventListener('click', battle)
