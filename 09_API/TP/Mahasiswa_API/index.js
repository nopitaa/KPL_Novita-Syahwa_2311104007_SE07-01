
    const express = require('express');
    const app = express();
    const PORT = 5000; 
    app.use(express.json());

    let mahasiswaList = [
    { nama: "Novita syahwa", nim: "2311104007" },
    { nama: "Prajna Paramitha Wardhany", nim: "2311104016" },
    { nama: "Martryatus sofia", nim: "2311104003" },
    { nama: "Tri Mylani", nim: "2311104001" },
    { nama: "Mei sari mantiantini", nim: "2311104012" },
    ];

    app.get('/api/mahasiswa', (req, res) => {
    res.json(mahasiswaList);
    });

    // GET /api/mahasiswa/:index Untuk engembalikan mahasiswa berdasarkan index
    app.get('/api/mahasiswa/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if (index < 0 || index >= mahasiswaList.length) {
        return res.status(404).json({ message: 'Index tidak ditemukan' });
    }
    res.json(mahasiswaList[index]);
    });

    // POST /api/mahasiswa Untuk enambahkan mahasiswa baru
    app.post('/api/mahasiswa', (req, res) => {
    const { nama, nim } = req.body;
    mahasiswaList.push({ nama, nim });
    res.status(201).json({ message: 'Mahasiswa ditambahkan', data: { nama, nim } });
    });

    // DELETE /api/mahasiswa/:index Untuk menghapus mahasiswa berdasarkan index
    app.delete('/api/mahasiswa/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if (index < 0 || index >= mahasiswaList.length) {
        return res.status(404).json({ message: 'Index tidak ditemukan' });
    }
    mahasiswaList.splice(index, 1);
    res.json({ message: `Mahasiswa pada index ${index} berhasil dihapus` });
    });

    // Running server
    app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}/api/mahasiswa`);
    });
