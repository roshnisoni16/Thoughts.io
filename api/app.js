const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/postRoutes');
const pool = require('./config/db'); // Import the pool

const app = express();

// Enable CORS with proper configuration
app.use(cors({
    origin: 'http://localhost:3000', // your client URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

app.use('/api/post', postRoutes);

const PORT = 5000;

// Simple test route to check database connectivity
app.get('/test-db', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT 1 + 1 AS result');
        res.json({ result: rows[0].result });
    } catch (error) {
        res.status(500).send('Database error');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});