let pac_x = parseInt(1 + Math.random() * 9);
let pac_y = parseInt(1 + Math.random() * 9);

let coin_x = parseInt(1 + Math.random() * 9);
let coin_y = parseInt(1 + Math.random() * 9);

let bomb_x = parseInt(1 + Math.random() * 9);
let bomb_y = parseInt(1 + Math.random() * 9);

let score = 0;

let coin_state = true;
let bomb_state = true;

function action() {
  console.log(event.key);
  switch (event.key) {
    case "ArrowUp":
      pac_y > 1 ? pac_y-- : pac_y == 1;
      break;
    case "ArrowRight":
      pac_x < 10 ? pac_x++ : pac_x == 10;
      // pac_x++;
      break;
    case "ArrowDown":
      pac_y < 10 ? pac_y++ : pac_y == 10;
      // pac_y++;
      break;
    case "ArrowLeft":
      pac_x > 1 ? pac_x-- : pac_x == 1;
      break;
  }
  if ((pac_x == coin_x) & (pac_y == coin_y)) {
    score += 10;
    // renderMap();
  } else if ((pac_x == bomb_x) & (pac_y == bomb_y)) {
    score -= 20;
  }
  movement();
  renderMap();
}
function movement() {
  if (pac_x == coin_x && pac_y == coin_y) {
    coin_state = false;
  }
  if (pac_x == bomb_x && pac_y == bomb_y) {
    bomb_state = false;
  }
  // renderMap();
}
function renderMap() {
  gameMap.innerHTML = ``;
  for (let y = 1; y <= 10; y++) {
    for (let x = 1; x <= 10; x++) {
      if (x == pac_x && y == pac_y) {
        gameMap.innerHTML += `<div class="pac"></div>`;
      } else if (x == coin_x && y == coin_y && coin_state) {
        gameMap.innerHTML += `<div class="coin"></div>`;
      } else if (x == bomb_x && y == bomb_y && bomb_state) {
        gameMap.innerHTML += `<div class="bomb"></div>`;
      } else {
        gameMap.innerHTML += `<div></div>`;
      }
    }
  }
  gameScore.innerHTML = `Score: ${score}`;
}

renderMap();
