// Import expressjs
const express = require('express');
const app = express();

// Import body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Listen to port 3000 by default
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
});

// Import routes
const courseRoutes = require('./routes/course.routes.js');
const homeRoutes = require('./routes/home.routes.js');

// Use routes
app.use('/api', courseRoutes);
app.use('/api', homeRoutes);

// Handle not found routes
app.use((req, res) => {
    res.status(404).json({ message: 'Rute tidak ditemukan' });
});

// Handle error routes
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
});