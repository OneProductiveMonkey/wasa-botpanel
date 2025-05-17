
const API_BASE = "https://wasabot-backend--postitguden.repl.co";

function connectPhantom() {
  if (window.solana && window.solana.isPhantom) {
    window.solana.connect().then(res => {
      document.getElementById('wallet-status').innerText = 'Wallet: ' + res.publicKey;
      log('Wallet ansluten.');
    }).catch(() => {
      alert('Kunde inte ansluta till Phantom.');
    });
  } else {
    alert('Phantom Wallet hittades inte.');
  }
}

function startBot() {
  fetch(`${API_BASE}/start-bot`, { method: 'POST' })
    .then(res => res.json())
    .then(data => {
      document.getElementById("bot-status").innerText = "Botstatus: Aktiv";
      log("Bot startad (backend).");
    })
    .catch(() => log("Misslyckades kontakta backend."));
}

function stopBot() {
  fetch(`${API_BASE}/stop-bot`, { method: 'POST' })
    .then(res => res.json())
    .then(data => {
      document.getElementById("bot-status").innerText = "Botstatus: Stoppad";
      log("Bot stoppad (backend).");
    })
    .catch(() => log("Misslyckades kontakta backend."));
}

function loadLog() {
  fetch(`${API_BASE}/log`)
    .then(res => res.json())
    .then(entries => {
      const logBox = document.getElementById("log-output");
      logBox.innerHTML = "";
      entries.forEach(msg => {
        const time = new Date().toLocaleTimeString();
        logBox.innerHTML += `<div>[${time}] ${msg}</div>`;
      });
    });
}

function log(msg) {
  const logBox = document.getElementById("log-output");
  const time = new Date().toLocaleTimeString();
  logBox.innerHTML += `<div>[${time}] ${msg}</div>`;
  logBox.scrollTop = logBox.scrollHeight;
}

setInterval(loadLog, 5000);
