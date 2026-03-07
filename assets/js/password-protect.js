(function () {
  const hash = window.__passwordHash;
  if (!hash) return;

  const sessionKey = "lecture-auth:" + window.location.pathname;
  if (sessionStorage.getItem(sessionKey) === hash) {
    document.getElementById("course-content").style.display = "";
    return;
  }

  // Build overlay HTML
  const overlay = document.createElement("div");
  overlay.id = "pw-overlay";
  overlay.innerHTML = `
    <div id="pw-card">
      <div id="pw-icon">&#x1F512;</div>
      <h2 id="pw-title">Password Protected</h2>
      <p id="pw-subtitle">Enter the password to access this page.</p>
      <input id="pw-input" type="password" placeholder="Password" autocomplete="current-password" />
      <button id="pw-btn">Unlock</button>
      <p id="pw-error"></p>
    </div>`;
  document.body.appendChild(overlay);

  async function sha256(str) {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
    return Array.from(new Uint8Array(buf))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }

  async function attempt() {
    const input = document.getElementById("pw-input").value;
    const computed = await sha256(input);
    if (computed === hash) {
      sessionStorage.setItem(sessionKey, hash);
      overlay.remove();
      document.getElementById("course-content").style.display = "";
    } else {
      const card = document.getElementById("pw-card");
      const err = document.getElementById("pw-error");
      err.textContent = "Incorrect password. Please try again.";
      card.classList.add("pw-shake");
      card.addEventListener("animationend", () => card.classList.remove("pw-shake"), { once: true });
    }
  }

  document.getElementById("pw-btn").addEventListener("click", attempt);
  document.getElementById("pw-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") attempt();
  });
})();
