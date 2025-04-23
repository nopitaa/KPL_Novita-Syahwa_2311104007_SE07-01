    const fs = require('fs');
    const path = __dirname + '/tp7_2_2311104007.json';

    class KuliahMahasiswa2311104007 {
    static ReadJSON() {
        try {
        const data = fs.readFileSync(path, 'utf-8');
        const json = JSON.parse(data);

        console.log("Daftar mata kuliah yang diambil:");
        json.courses.forEach((mk, index) => {
            console.log(`MK ${index + 1} ${mk.code} - ${mk.name}`);
        });
        } catch (err) {
        console.error("Gagal membaca file JSON:", err.message);
        }
    }
    }

    KuliahMahasiswa2311104007.ReadJSON();
