    const fs = require('fs');

    class DataMahasiswa2311104007 {
    static ReadJSON() {
        const path = './jurnal7_1_2311104007.json';
        try {
        const data = fs.readFileSync(path, 'utf-8');
        const json = JSON.parse(data);

        console.log("===== DATA MAHASISWA =====");
        console.log(`Nama        : ${json.firstName} ${json.lastName}`);
        console.log(`Gender      : ${json.gender}`);
        console.log(`Usia        : ${json.age}`);
        console.log();
        console.log("Alamat:");
        console.log(`  Jalan     : ${json.address.streetAddress}`);
        console.log(`  Kota      : ${json.address.city}`);
        console.log(`  Provinsi  : ${json.address.state}`);
        console.log();
        console.log("Mata Kuliah:");
        json.courses.forEach((course) => {
            console.log(`  - ${course.code}: ${course.name}`);
        });

        } catch (err) {
        console.error("Gagal membaca file JSON:", err.message);
        }
    }
    }

    module.exports = DataMahasiswa2311104007;
