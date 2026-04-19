const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
app.use(express.json());

app.post('/', async (req, res) => {
    const { username, brainrot, value, serverId } = req.body;

    if (!username) return res.sendStatus(400);

    await fetch(process.env.WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            content: `🌍 GLOBAL LOG

👤 ${username}
🧠 ${brainrot}
💰 ${value}
🖥️ ${serverId}`
        })
    });

    res.sendStatus(200);
});

app.listen(3000);
