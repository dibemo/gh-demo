const express = require('express');

const app = express();

app.use('/', (req, res) => {
    return res.status(200).send("Hello World POC GKE!");
});

app.use('/health-check', (req, res) => {
    return res.status(200).send(true);
});

app.listen(process.env.NODE_PORT, (err) => {
    if (err) {
        console.error(err);
        throw err;
    }

    console.log('Server run on port ', process.env.NODE_PORT);
});
