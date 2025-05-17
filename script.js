
const connectWalletButton = document.getElementById('connectWallet');
const walletAddressSpan = document.getElementById('walletAddress');
const startBotButton = document.getElementById('startBot');
const stopBotButton = document.getElementById('stopBot');
const botStatusSpan = document.getElementById('botStatus');
const logElement = document.getElementById('log');
const budgetInput = document.getElementById('budget');
const strategySelect = document.getElementById('strategy');

const API_BASE = "https://wasa-backend.onrender.com";

function logMessage(message, isError = false) {
    const timestamp = new Date().toLocaleTimeString('sv-SE');
    const line = document.createElement('div');
    line.textContent = `[${timestamp}] ${message}`;
    line.style.color = isError ? '#ff4d4d' : '#00ff00';
    logElement.appendChild(line);
    logElement.scrollTop = logElement.scrollHeight;
}

connectWalletButton.addEventListener('click', async () => {
    try {
        const wallet = "H4JDBw8UD7o7Tk2HGoEKrrTr94YPNvAT6ajhPRUdAQ1";
        walletAddressSpan.textContent = wallet;
        logMessage("Wallet ansluten.");
    } catch (error) {
        logMessage("Misslyckades ansluta wallet.", true);
    }
});

startBotButton.addEventListener('click', async () => {
    const budget = budgetInput.value;
    const strategy = strategySelect.value;

    try {
        const response = await fetch(`${API_BASE}/start-bot`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ budget, strategy })
        });

        if (response.ok) {
            botStatusSpan.textContent = "Aktiv";
            logMessage("Bot startad.");
        } else {
            throw new Error();
        }
    } catch (error) {
        logMessage("Misslyckades kontakta backend.", true);
    }
});

stopBotButton.addEventListener('click', async () => {
    try {
        const response = await fetch(`${API_BASE}/stop-bot`, { method: "POST" });

        if (response.ok) {
            botStatusSpan.textContent = "Offline";
            logMessage("Bot stoppad.");
        } else {
            throw new Error();
        }
    } catch (error) {
        logMessage("Misslyckades kontakta backend.", true);
    }
});
