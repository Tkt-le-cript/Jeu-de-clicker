// scripts/auth.js

const googleBtn = document.getElementById("google-login");
const guestBtn = document.getElementById("guest-login");
const transition = document.getElementById("transition");

function showTransitionAndGo(url) {
  transition.classList.remove("hidden");
  transition.classList.add("show");
  setTimeout(() => {
    window.location.href = url;
  }, 800); // délai pour effet visuel
}

// === Connexion Google simulée ===
googleBtn?.addEventListener("click", () => {
  // TODO : implémenter Firebase ou autre auth
  const pseudo = "googleUser"; // simulé
  localStorage.setItem("pseudo", pseudo);
  showTransitionAndGo("game.html");
});

// === Invité ===
guestBtn?.addEventListener("click", () => {
  localStorage.setItem("guest", "true");
  showTransitionAndGo("guest-warning.html");
});
