javascript
let hp = 100;
let score = 0;

const storyText = document.getElementById("story");
const hpDisplay = document.getElementById("hp");
const scoreDisplay = document.getElementById("score");

function updateStats() {
  hpDisplay.textContent = hp;
  scoreDisplay.textContent = score;
}

function gameOver() {
  storyText.innerHTML = "💀 Kamu telah mati!<br>Skor akhirmu: " + score + "<br><button onclick='location.reload()'>Ulangi Game</button>";
  document.querySelector('.buttons').style.display = 'none';
}

function choosePath(direction) {
  if (hp <= 0) return;

  const randomEvent = Math.random();

  if (direction === 'left') {
    if (randomEvent < 0.5) {
      // Monster muncul
      storyText.textContent = "👹 Monster muncul dan menyerangmu!";
      hp -= 20;
      score += 10;
    } else {
      // Menemukan koin
      storyText.textContent = "💰 Kamu menemukan koin emas!";
      score += 30;
    }
  } else if (direction === 'right') {
    if (randomEvent < 0.4) {
      // Terjatuh dari jurang
      storyText.textContent = "🕳️ Kamu terjatuh dari jurang!";
      hp -= 30;
    } else {
      // Menemukan jamu penyembuh
      storyText.textContent = "🌿 Kamu menemukan jamu ajaib yang menyembuhkan!";
      hp += 10;
      score += 15;
    }
  }

  if (hp <= 0) {
    gameOver();
  }

  updateStats();
}

// Inisialisasi awal
updateStats();
storyText.textContent = "Kamu berada di persimpangan hutan ajaib. Arah mana yang ingin kamu tuju?";