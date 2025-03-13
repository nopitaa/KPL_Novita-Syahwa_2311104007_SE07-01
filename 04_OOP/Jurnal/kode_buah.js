    const readline = require("readline");

    class KodeBuah {
    constructor() {
        // data kode bua yang tersedia yee
        this.dataKodeBuah = {
        "Apel": "A00",
        "Aprikot": "B00",
        "Alpukat": "C00",
        "Pisang": "D00",
        "Paprika": "E00",
        "Kurma": "K00",
        "Durian": "L00",
        "Anggur": "M00",
        "Melon": "N00",
        "Semangka": "O00",
        "Mangga": "P00",
        "Stroberi": "Q00",
        "Nanas": "R00",
        "Jeruk": "S00",
        "Blueberry": "T00"
        };
    }

    getKodeBuah(namaBuah) {
        let formattedNamaBuah = namaBuah.charAt(0).toUpperCase() + namaBuah.slice(1).toLowerCase();
        return this.dataKodeBuah[formattedNamaBuah] || "Kode buah tidak ditemukan. Coba lagi!";
    }

    tampilkanDaftarBuah() {
        console.log("Daftar buah yang tersedia:");
        console.log(Object.keys(this.dataKodeBuah).join(", "));
    }

    run() {
        const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
        });

        console.log("Selamat datang di sistem pencarian kode buah!");
        this.tampilkanDaftarBuah();

        const tanya = () => {
        rl.question("\nMasukkan nama buah (atau ketik 'exit' untuk keluar): ", (namaBuah) => {
            if (namaBuah.toLowerCase() === "exit") {
            console.log("Terima kasih telah menggunakan sistem ini!");
            rl.close();
            } else {
            console.log("Kode Buah:", this.getKodeBuah(namaBuah));
            tanya();
            }
        });
        };

        tanya();
    }
    }

    module.exports = KodeBuah;

    if (require.main === module) {
    const kb = new KodeBuah();
    kb.run();
    }
