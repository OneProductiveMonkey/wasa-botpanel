from pathlib import Path

# Uppdaterat script.js med korrekt API_BASE från din Replit-backend
api_base_url = "https://wasabot-backend.postitguden.repl.co"

script_js = f"""
const API_BASE = "{api_base_url}";

function connectPhantom() {{
  if (window.solana && window.solana.isPhantom) {{
    window.solana.connect().then(res => {{
      document.getElementById('wallet-status').innerText = 'Wallet: ' + res.publicKey;
      log('Wallet ansluten.');
    }}).catch(() => {{
      alert('Kunde inte ansluta till Phantom.');
    }});
  }} else {{
    alert('Phantom Wallet hittades inte.');
  }}
}}

function startBot() {{
  fetch(`${{API_BASE}}/start-bot`, {{ method: 'POST' }})
    .then(res => res.json())
    .then(data => {{
      document.getElementById("bot-status").innerText = "Botstatus: Aktiv";
      log("Bot startad (backend).");
    }})
    .catch(() => log("Misslyckades kontakta backend."));
}}

function stopBot() {{
  fetch(`${{API_BASE}}/stop-bot`, {{ method: 'POST' }})
    .then(res => res.json())
    .then(data => {{
      document.getElementById("bot-status").innerText = "Botstatus: Stoppad";
      log("Bot stoppad (backend).");
    }})
    .catch(() => log("Misslyckades kontakta backend."));
}}

function loadLog() {{
  fetch(`${{API_BASE}}/log`)
    .then(res => res.json())
    .then(entries => {{
      const logBox = document.getElementById("log-output");
      logBox.innerHTML = "";
      entries.forEach(msg => {{
        const time = new Date().toLocaleTimeString();
        logBox.innerHTML += `<div>[${{time}}] ${{msg}}</div>`;
      }});
    }});
}}

function log(msg) {{
  const logBox = document.getElementById("log-output");
  const time = new Date().toLocaleTimeString();
  logBox.innerHTML += `<div>[${{time}}] ${{msg}}</div>`;
  logBox.scrollTop = logBox.scrollHeight;
}}

setInterval(loadLog, 5000);
"""

# Spara till fil
script_path = Path("/mnt/data/script.js")
script_path.write_text(script_js, encoding="utf-8")

script_path.name
