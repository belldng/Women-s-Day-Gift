const envelope = document.querySelector(".env-wrapper");

envelope.addEventListener("click", () => {
  envelope.classList.toggle("flap");
});

(function () {
  const c = document.getElementById("petalBg");
  const s = ["🌸", "🌹", "✿", "❀", "🍀"];
  for (let i = 0; i < 18; i++) {
    const el = document.createElement("div");
    el.className = "petal";
    el.textContent = s[Math.floor(Math.random() * s.length)];
    el.style.left = Math.random() * 100 + "vw";
    el.style.fontSize = 0.7 + Math.random() * 1.2 + "rem";
    el.style.animationDuration = 10 + Math.random() * 18 + "s";
    el.style.animationDelay = Math.random() * 15 + "s";
    c.appendChild(el);
  }
})();
