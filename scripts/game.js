// scripts/game.js

let clickCooldown = false;

function clickMoney() {
  if (clickCooldown) return;

  clickCooldown = true;
  money += 1;
  update();

  setTimeout(() => {
    clickCooldown = false;
  }, 200); // anti-spam : 0.2s entre clics
}
