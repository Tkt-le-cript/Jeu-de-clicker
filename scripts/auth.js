import { signInWithGoogle } from "./firebase.js";

document.getElementById("google-login").addEventListener("click", () => {
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

document.getElementById("guest-login").addEventListener("click", () => {
  localStorage.setItem("pseudo", "Invité");
  localStorage.setItem("guest", "true");
  localStorage.setItem("guestExpire", Date.now() + 3600_000); // 1h
  window.location.href = "game.html";
});
