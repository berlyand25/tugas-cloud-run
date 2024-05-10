const express = require('express');
const app = express();

// Data pengguna sementara
const users = [
    { id: 1, username: 'berlyand25', birthdate: '2024-05-10', email: 'berrr@gmail.com' },
    { id: 2, username: 'sanchooo10', birthdate: '2000-03-25', email: 'sancho@gmail.com' }
];

// Endpoint untuk mendapatkan semua pengguna
app.get('/users', (req, res) => {
    res.json(users);
});

// Endpoint untuk mendapatkan pengguna berdasarkan ID
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'Pengguna tidak ditemukan' });
    }
});

const PORT = process.env.PORT || 3069;
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
