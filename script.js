
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
  document.getElementById("bot-status").innerText = "Botstatus: Aktiv";
  log("Bot startad.");
}

function stopBot() {
  document.getElementById("bot-status").innerText = "Botstatus: Stoppad";
  log("Bot stoppad.");
}

function log(msg) {
  const logBox = document.getElementById("log-output");
  const time = new Date().toLocaleTimeString();
  logBox.innerHTML += `<div>[${time}] ${msg}</div>`;
  logBox.scrollTop = logBox.scrollHeight;
}
