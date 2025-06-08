let money = 0;
let pseudo = localStorage.getItem("pseudo") || "Invité";
let isGuest = localStorage.getItem("guest") === "true";

// Initialisation interface
document.getElementById("playerName").textContent = pseudo;
document.getElementById("money").textContent = money;

// === Clicker ===
document.getElementById("clickButton").addEventListener("click", () => {
  money += 1;
  updateDisplay();
});

// === Upgrade système (simple exemple) ===
const upgrades = [
  { name: "Améliorer moteur 3D", cost: 10, bonus: 1 },
  { name: "Créer des mobs", cost: 50, bonus: 5 },
];

function loadUpgrades() {
  const upgradesDiv = document.getElementById("upgrades");
  upgradesDiv.innerHTML = "";
  upgrades.forEach((upg, index) => {
    const btn = document.createElement("button");
    btn.textContent = `${upg.name} (${upg.cost}$)`;
    btn.onclick = () => {
      if (money >= upg.cost) {
        money -= upg.cost;
        upg.cost *= 2;
        upg.bonus += 1;
        autoIncome += upg.bonus;
        loadUpgrades();
        updateDisplay();
      }
    };
    upgradesDiv.appendChild(btn);
  });
}
let autoIncome = 0;
setInterval(() => {
  money += autoIncome;
  updateDisplay();
}, 1000);

function updateDisplay() {
  document.getElementById("money").textContent = money;
}

loadUpgrades();

// === Invité : lancer modale + timer reset ===
if (isGuest) {
  const modal = document.getElementById("guestModal");
  modal.classList.remove("hidden");

  document.getElementById("continueGuest").addEventListener("click", () => {
    modal.classList.add("hidden");
    startGuestSessionTimer();
  });
}

function startGuestSessionTimer() {
  const expireAt = Date.now() + 60 * 60 * 1000; // 1h
  localStorage.setItem("guestExpire", expireAt);

  setTimeout(() => {
    alert("⏳ Session expirée. Tout est perdu !");
    localStorage.clear();
    location.href = "index.html";
  }, 60 * 60 * 1000);
}

// Si on recharge la page en invité après avoir cliqué, reprendre le timer
if (isGuest && !document.getElementById("guestModal")?.classList.contains("hidden")) {
  const savedExpire = localStorage.getItem("guestExpire");
  if (savedExpire && Date.now() < parseInt(savedExpire)) {
    const delay = parseInt(savedExpire) - Date.now();
    setTimeout(() => {
      alert("⏳ Session expirée !");
      localStorage.clear();
      location.href = "index.html";
    }, delay);
  }
}
