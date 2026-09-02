const express = require('express');

const app = express();

const PORT = 3000;

const logger = require('./middlewares/logger');

const checkAuth = require('./middlewares/checkAuth');

const userRoutes = require('./routes/userRoutes');

app.use(express.json());

app.use(logger);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/dashboard', checkAuth, (req, res) => {
    res.send('Welcome to Dashboard!');
});

app.use('/', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});