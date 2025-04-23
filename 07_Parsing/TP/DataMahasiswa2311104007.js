    const fs = require('fs');
    const path = __dirname + '/tp7_1_2311104007.json';

    class DataMahasiswa2311104007 {
    static ReadJSON() {
        try {
        const data = fs.readFileSync(path, 'utf-8');
        const json = JSON.parse(data);

        const fullName = `${json.nama.depan} ${json.nama.belakang}`;
        console.log(`Nama ${fullName} dengan nim ${json.nim} dari fakultas ${json.fakultas}`);
        } catch (err) {
        console.error("Gagal membaca file JSON:", err.message);
        }
    }
    }

    DataMahasiswa2311104007.ReadJSON();
