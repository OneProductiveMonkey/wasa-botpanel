const api_base = "https://wasa-backend.onrender.com";

document.getElementById("connectButton").addEventListener("click", () => {
    const walletAddress = "H4JDBw8UD7o7Tk2HGoEKrrTr94YPNvAT6ajhPRUdAQ1";
    document.getElementById("walletAddress").textContent = walletAddress;
    appendLog("Wallet ansluten.", "success");
});

document.getElementById("startBot").addEventListener("click", async () => {
    try {
        const res = await fetch(`${api_base}/start-bot`, { method: "POST" });
        const data = await res.json();
        document.getElementById("botStatus").textContent = "Aktiv";
        appendLog("Bot startad.", "success");
    } catch (e) {
        appendLog("Misslyckades kontakta backend.", "error");
    }
});

document.getElementById("stopBot").addEventListener("click", async () => {
    try {
        const res = await fetch(`${api_base}/stop-bot`, { method: "POST" });
        const data = await res.json();
        document.getElementById("botStatus").textContent = "Stoppad";
        appendLog("Bot stoppad.", "success");
    } catch (e) {
        appendLog("Misslyckades kontakta backend.", "error");
    }
});

function appendLog(message, type = "info") {
    const logElement = document.getElementById("log");
    const time = new Date().toLocaleTimeString();
    const line = document.createElement("div");

    if (type === "error") {
        line.style.color = "#ff4d4d";
    } else if (type === "success") {
        line.style.color = "#00ff99";
    } else {
        line.style.color = "#ccc";
    }

    line.textContent = `[${time}] ${message}`;
    logElement.appendChild(line);
    logElement.scrollTop = logElement.scrollHeight;
}
