// scripts/storage.js

export function isGuestSession() {
  const url = new URL(window.location.href);
  return url.searchParams.get("guest") === "true";
}

export function startGuestTimer() {
  if (isGuestSession()) {
    const start = Date.now();
    setTimeout(() => {
      alert("⏳ Une heure est passée. Votre session invité a expiré.");
      localStorage.clear();
      location.href = "index.html";
    }, 60 * 60 * 1000); // 1 heure
  }
}
