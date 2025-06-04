document.getElementById("connectWallet").onclick = () => {
    document.getElementById("walletStatus").textContent = "Wallet: H4JDBw3...";
    document.getElementById("disconnectWallet").hidden = false;
    log("Wallet ansluten.");
};

document.getElementById("disconnectWallet").onclick = () => {
    document.getElementById("walletStatus").textContent = "Ingen wallet ansluten";
    document.getElementById("disconnectWallet").hidden = true;
    log("Wallet frånkopplad.");
};

document.getElementById("startBot").onclick = () => {
    const strategy = document.getElementById("strategy").value;
    document.getElementById("botStatus").textContent = "Aktiv";
    log(`Bot startad med strategi: ${strategy}`);
};

document.getElementById("stopBot").onclick = () => {
    document.getElementById("botStatus").textContent = "Offline";
    log("Bot stoppad.");
};

// Logga ändring av budget
document.getElementById("budget").onchange = (e) => {
    log(`Budget satt till €${e.target.value}`);
};

document.getElementById("buyTopSignal").onclick = () => {
    log("AI-signal köpt: Shiba Inu");
};

function log(message) {
    const now = new Date().toLocaleTimeString();
    const output = document.getElementById("logOutput");
    output.textContent += `\n[${now}] ${message}`;
}
