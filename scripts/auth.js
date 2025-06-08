// scripts/auth.js

document.getElementById('google-login')?.addEventListener('click', () => {
  // Simulé pour l'instant
  alert("Connexion Google non implémentée (mock)");
  // window.location.href = "game.html?user=tonPseudoGoogle";
});

document.getElementById('guest-login')?.addEventListener('click', () => {
  window.location.href = "guest-warning.html";
});
