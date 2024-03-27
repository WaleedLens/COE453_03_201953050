const express = require('express');
const app = express();

app.get('/add', (req, res) => {
    const X = parseFloat(req.query.X);
    const Y = parseFloat(req.query.Y);
    const result = parseFloat(X) + parseFloat(Y);
    res.json({ X: X, Y: Y, Result: result });
});

app.get('/sub', (req, res) => {
    const X = parseFloat(req.query.X);
    const Y = parseFloat(req.query.Y);
    const result = parseFloat(X) - parseFloat(Y);
    res.json({ X: X, Y: Y, Result: result });
});

app.get('/div', (req, res) => {
    const X = parseFloat(req.query.X);
    const Y = parseFloat(req.query.Y);
    if(Y == 0) {
        return res.status(400).json({error: "Cannot divide by zero"});
    }
    const result = parseFloat(X) / parseFloat(Y);
    res.json({ X: X, Y: Y, Result: result });
});

app.get('/mul', (req, res) => {
    const X = parseFloat(req.query.X);
    const Y = parseFloat(req.query.Y);
    const result = parseFloat(X) * parseFloat(Y);
    res.json({ X: X, Y: Y, Result: result });
});

app.listen(8080, () => {
    console.log('Server is up on 8080');
});
