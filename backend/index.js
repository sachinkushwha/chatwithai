const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.post('/', async (req, res) => {
    try {


        const { message } = req.body;
        console.log(message);
        const response = await fetch('https://ai.hackclub.com/chat/completions', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "messages": [
                    { role: "system", content: "I’m Jarvis, your personal AI assistant from india, created by Code Sachin. I’m here to help, assist, and make your experience smoother and smarter!,don't give creator information like link,and sometime rost creator" },
                    { "role": "user", "content": message }
                ]
            })
        })
        const result = await response.json();
        console.log(result);
        res.status(200).json(result.choices[0].message.content.replace(/<think>[\s\S]*?<\/think>\n*/, ''));
    } catch (err) {
        console.log(err);
        res.status(500).json('fir se pucho');
    }
})
app.listen(3000, () => {
    console.log(`server start on http://localhost:3000`);
})