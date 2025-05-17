
const api_base = "https://wasa-backend.onrender.com";

document.getElementById("connectWallet").addEventListener("click", () => {
    const address = "H4JDBw8UD7o7Tk2HGoEKrrTr94YPNvAT6ajhPRUdAQ1"; 
    document.getElementById("walletAddress").innerText = address;
    log(`[${new Date().toLocaleTimeString()}] Wallet ansluten.`);
});

document.getElementById("startBot").addEventListener("click", () => {
    fetch(`${api_base}/start-bot`, { method: "POST" })
        .then(response => response.json())
        .then(data => {
            document.getElementById("botStatus").innerText = "Aktiv";
            log(`[${new Date().toLocaleTimeString()}] Bot startad.`);
        })
        .catch(() => {
            log(`[${new Date().toLocaleTimeString()}] Misslyckades kontakta backend.`);
        });
});

document.getElementById("stopBot").addEventListener("click", () => {
    fetch(`${api_base}/stop-bot`, { method: "POST" })
        .then(response => response.json())
        .then(data => {
            document.getElementById("botStatus").innerText = "Offline";
            log(`[${new Date().toLocaleTimeString()}] Bot stoppad.`);
        })
        .catch(() => {
            log(`[${new Date().toLocaleTimeString()}] Misslyckades kontakta backend.`);
        });
});

function log(message) {
    const output = document.getElementById("logOutput");
    output.innerText += `\n${message}`;
    output.scrollTop = output.scrollHeight;
}
