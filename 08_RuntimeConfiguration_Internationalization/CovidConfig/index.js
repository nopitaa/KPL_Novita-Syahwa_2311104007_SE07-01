const fs = require('fs');
const readline = require('readline');

class CovidConfig {
    constructor(configFile = 'covid_config.json') {
        this.configFile = configFile;
        this.config = this.loadConfig();
    }

    loadConfig() {
        try {
            if (fs.existsSync(this.configFile)) {
                const data = fs.readFileSync(this.configFile);
                return JSON.parse(data);
            }
        } catch (err) {
            console.error('Gagal membaca konfigurasi:', err);
        }

        // Nilai default jika file tidak ditemukan
        return {
            satuan_suhu: "celcius",
            batas_hari_deman: 14,
            pesan_ditolak: "Anda tidak diperbolehkan masuk ke dalam gedung ini",
            pesan_diterima: "Anda dipersilahkan untuk masuk ke dalam gedung ini"
        };
    }

    simpanConfig() {
        fs.writeFileSync(this.configFile, JSON.stringify(this.config, null, 4));
    }

    get satuanSuhu() {
        return this.config.satuan_suhu || "celcius";
    }

    get batasHariDeman() {
        return parseInt(this.config.batas_hari_deman) || 14;
    }

    get pesanDiterima() {
        return this.config.pesan_diterima;
    }

    get pesanDitolak() {
        return this.config.pesan_ditolak;
    }

    ubahSatuan() {
        // Ubah satuan suhu dan simpan
        this.config.satuan_suhu = this.satuanSuhu.toLowerCase() === "celcius" ? "fahrenheit" : "celcius";
        this.simpanConfig();
    }

    // Fungsi untuk konversi suhu dari fahrenheit ke celsius
    konversiKeCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }
}

// Fungsi utama
async function main() {
    const config = new CovidConfig();
    config.ubahSatuan(); // Ganti satuan suhu

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const tanya = (pertanyaan) => new Promise(resolve => rl.question(pertanyaan, resolve));

    // Menampilkan suhu dalam satuan Celsius (meskipun internal sudah diubah)
    const suhuInput = await tanya(`Berapa suhu badan anda saat ini? Dalam nilai Celcius: `);
    const hariInput = await tanya(`Berapa hari yang lalu (perkiraan) anda terakhir memiliki gejala deman? `);
    rl.close();

    const suhu = parseFloat(suhuInput);
    const hari = parseInt(hariInput);

    let suhuNormal = false;

    if (config.satuanSuhu === "celcius") {
        suhuNormal = suhu >= 36.5 && suhu <= 37.5;
    } else if (config.satuanSuhu === "fahrenheit") {
        const suhuFahrenheit = (suhu * 9 / 5) + 32; // konversi Celsius ke Fahrenheit
        suhuNormal = suhuFahrenheit >= 97.7 && suhuFahrenheit <= 99.5;
    }

    const hariAman = hari < config.batasHariDeman;

    if (suhuNormal && hariAman) {
        console.log(config.pesanDiterima);
    } else {
        console.log(config.pesanDitolak);
    }
}

main();
