// Import expressjs
const express = require('express');
const app = express();

// Import body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Import cors
const cors = require('cors');
app.use(cors());

// Listen to port 3000 by default
const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
    console.log(`Server berjalan di port ${port}`);
});

// Import routes
const courseRoutes = require('./routes/courses.routes.js');
// const homeRoutes = require('./routes/testimonial.routes.js');
const pesertaRoutes = require('./routes/peserta.routes.js');
const pesanRoutes = require('./routes/pesan.routes.js');
const subscriptionRoutes = require('./routes/subscription.routes.js');
const testimonialRoutes = require('./routes/testimonial.routes.js');

// Use routes
app.use('/api', courseRoutes);
app.use('/api', homeRoutes);
app.use('/api', pesertaRoutes);
app.use('/api', pesanRoutes);
app.use('/api', subscriptionRoutes);
app.use('/api', testimonialRoutes);

// Handle not found routes
app.use((req, res) => {
    res.status(404).json({ message: 'Rute tidak ditemukan' });
});

// Handle error routes
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
});