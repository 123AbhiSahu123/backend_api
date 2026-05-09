const express = require('express');
const cors = require("cors");
const app =express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/api/hello', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Hello from the API",
    })
});

app.post('/api/data', (req, res) => {
    console.log("Body received:", req.body);
    const { name, name1 } = req.body;

    if (!name) {
        return res.status(400).json({
            success: false,
            message: "Name is required",
        });
    }

    res.status(200).json({
        success: true,
        message: `Hello, ${name} & ${name1}! Your data has been received.`,
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});