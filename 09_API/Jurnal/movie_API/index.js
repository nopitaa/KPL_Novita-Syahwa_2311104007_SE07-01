    const express = require('express');
    const app = express();
    const PORT = 6000;
    app.use(express.json());

    let movieList = [
    {
        title: "The Shawshank Redemption", 
        director: "Frank Darabont",        
        stars: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
        description: "Two imprisoned men bond over a number of years." 
    },
    {
        
        title: "The Godfather",
        director: "Francis Ford Coppola",
        stars: ["Marlon Brando", "Al Pacino", "James Caan"],
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
    },
    {
        title: "The Dark Knight",
        director: "Christopher Nolan",
        stars: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        description: "Batman faces the Joker, a criminal mastermind who seeks to create chaos."
    }
    ];
    app.get('/api/Movies', (req, res) => {
    res.json(movieList); 
    });

    app.get('/api/Movies/:index', (req, res) => {
    const index = parseInt(req.params.index); 
    if (index < 0 || index >= movieList.length) {
        return res.status(404).json({ message: 'Film tidak ditemukan' }); 
    }
    res.json(movieList[index]); 
    });

    app.post('/api/Movies', (req, res) => {
    const { title, director, stars, description } = req.body;
    movieList.push({ title, director, stars, description });
    res.status(201).json({ message: 'Film ditambahkan', data: { title, director, stars, description } });
    });

    app.delete('/api/Movies/:index', (req, res) => {
        const index = parseInt(req.params.index); 
        if (index < 0 || index >= movieList.length) {
            return res.status(404).json({ message: 'Index tidak ditemukan' }); 
        }
        const deleted = movieList.splice(index, 1);
        res.json({ message: `Movie pada index ${index} berhasil dihapus`, data: deleted[0] });
        });
    app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}/api/Movies`);
    });