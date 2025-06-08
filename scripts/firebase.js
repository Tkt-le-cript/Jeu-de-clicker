// Import depuis les CDN Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Ta config Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBlA51alOyLgGOqhFLKorwuDYKBZ-QDw48",
  authDomain: "cliquer-396f3.firebaseapp.com",
  projectId: "cliquer-396f3",
  storageBucket: "cliquer-396f3.firebasestorage.app",
  messagingSenderId: "369745613359",
  appId: "1:369745613359:web:c30370ac79583b29a6acda",
  measurementId: "G-45BM05HW17"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export function signInWithGoogle() {
  return signInWithPopup(auth, provider);
}
