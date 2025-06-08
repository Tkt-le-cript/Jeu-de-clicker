let money = 0;
let clickPower = 1;
let autoIncome = 0;

let pseudo = localStorage.getItem("pseudo") || "Invité";
let isGuest = localStorage.getItem("guest") === "true";

document.getElementById("playerName").textContent = pseudo;
document.getElementById("money").textContent = money;

document.getElementById("clickButton").addEventListener("click", () => {
  money += clickPower;
  updateDisplay();
});

const upgrades = [
  { name: "Coder plus vite", cost: 20, clickBoost: 1 },
  { name: "Assistant IA", cost: 100, autoBoost: 2 },
  { name: "Graphismes HD", cost: 250, clickBoost: 5 },
];

function loadUpgrades() {
  const container = document.getElementById("upgrades");
  container.innerHTML = "";

  upgrades.forEach((upg, i) => {
    const btn = document.createElement("button");
    btn.textContent = `${upg.name} - ${upg.cost}$`;
    btn.onclick = () => {
      if (money >= upg.cost) {
        money -= upg.cost;
        clickPower += upg.clickBoost || 0;
        autoIncome += upg.autoBoost || 0;
        upg.cost = Math.floor(upg.cost * 1.7);
        loadUpgrades();
        updateDisplay();
      }
    };
    container.appendChild(btn);
  });
}

function updateDisplay() {
  document.getElementById("money").textContent = Math.floor(money);
}

setInterval(() => {
  money += autoIncome;
  updateDisplay();
}, 1000);

loadUpgrades();

// Si invité, expire après 1h
if (isGuest) {
  const expire = parseInt(localStorage.getItem("guestExpire") || "0", 10);
  const timeLeft = expire - Date.now();
  if (timeLeft <= 0) {
    alert("Session expirée. Reviens te connecter !");
    localStorage.clear();
    location.href = "index.html";
  } else {
    setTimeout(() => {
      alert("Session invitée expirée. Tes données sont perdues.");
      localStorage.clear();
      location.href = "index.html";
    }, timeLeft);
  }
}
