const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Jumlah barang: ", (jumlah) => {
    let totalHarga = 0;
    let jumlahBarang = parseInt(jumlah);
    let count = 0;

    function tanyaHarga() {
        if (count < jumlahBarang) {
            rl.question(`Harga barang ke-${count + 1}: `, (harga) => {
                totalHarga += parseFloat(harga);
                count++;
                tanyaHarga();
            });
        } else {
            let kategoriDiskon;
            if (totalHarga > 100000) {
                kategoriDiskon = "Diskon Besar";
            } else if (totalHarga >= 50000) {
                kategoriDiskon = "Diskon Sedang";
            } else {
                kategoriDiskon = "Tidak ada diskon";
            }

            console.log(`\nTotal harga: ${totalHarga}`);
            console.log(`Jumlah barang: ${jumlahBarang}`);
            console.log(`Kategori Diskon: ${kategoriDiskon}`);

            rl.close();
        }
    }

    tanyaHarga();
});
