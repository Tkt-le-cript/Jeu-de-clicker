import { signInWithGoogle } from "./firebase.js";

// Attendre que le DOM soit prêt
document.addEventListener("DOMContentLoaded", () => {
  const googleBtn = document.getElementById("google-login");
  const guestBtn = document.getElementById("guest-login");

  if (googleBtn) {
    googleBtn.addEventListener("click", () => {
      signInWithGoogle()
        .then((result) => {
          const user = result.user;
          localStorage.setItem("pseudo", user.displayName || "Joueur");
          localStorage.setItem("guest", "false");
          window.location.href = "game.html";
        })
        .catch((error) => {
          console.error("Erreur Google Auth:", error);
          alert("Erreur de connexion Google.");
        });
    });
  }

  if (guestBtn) {
    guestBtn.addEventListener("click", () => {
      localStorage.setItem("pseudo", "Invité");
      localStorage.setItem("guest", "true");
      localStorage.setItem("guestExpire", Date.now() + 3600_000);
      window.location.href = "game.html";
    });
  }
});
