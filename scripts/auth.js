import { signInWithGoogle } from "./firebase.js";

document.getElementById("google-login").addEventListener("click", () => {
  signInWithGoogle()
    .then((result) => {
      const user = result.user;
      localStorage.setItem("pseudo", user.displayName);
      localStorage.setItem("guest", "false");
      window.location.href = "game.html";
    })
    .catch((error) => {
      console.error("Erreur Google Auth:", error);
      alert("Erreur de connexion Google.");
    });
});
