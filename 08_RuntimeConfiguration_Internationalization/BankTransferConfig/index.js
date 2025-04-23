const fs = require('fs');
const readline = require('readline');

class BankTransferConfig {
    constructor(configFile = 'bank_transfer_config.json') {
        this.configFile = configFile;
        this.defaultConfig = {
            lang: "en",
            transfer: {
                threshold: 25000000,
                low_fee: 6500,
                high_fee: 15000
            },
            methods: ["RTO (real-time)", "SKN", "RTGS", "BI FAST"],
            confirmation: {
                en: "yes",
                id: "ya"
            }
        };
        this.config = this.loadConfig();
    }

    loadConfig() {
        try {
            if (fs.existsSync(this.configFile)) {
                const data = fs.readFileSync(this.configFile, 'utf8');
                const userConfig = JSON.parse(data);
                return { ...this.defaultConfig, ...userConfig };
            }
        } catch (error) {
            console.log("Gagal membaca file konfigurasi. Menggunakan default.");
        }
        return this.defaultConfig;
    }
}

// Membuat interface input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const app = async () => {
    const config = new BankTransferConfig().config;
    const lang = config.lang;
    const { threshold, low_fee, high_fee } = config.transfer;
    const methods = config.methods;
    const confirmation = config.confirmation;

    const ask = (question) => new Promise((resolve) => rl.question(question, resolve));

    const amountInput = await ask(
        lang === 'en' ?
        "Please insert the amount of money to transfer: " :
        "Masukkan jumlah uang yang akan di-transfer: "
    );

    const amount = parseInt(amountInput);
    const fee = amount <= threshold ? low_fee : high_fee;
    const total = amount + fee;

    if (lang === "en") {
        console.log(`Transfer fee = ${fee}`);
        console.log(`Total amount = ${total}`);
        console.log("Select transfer method:");
    } else {
        console.log(`Biaya transfer = ${fee}`);
        console.log(`Total biaya = ${total}`);
        console.log("Pilih metode transfer:");
    }

    methods.forEach((method, index) => {
        console.log(`${index + 1}. ${method}`);
    });

    await ask("Pilihan Anda (nomor): ");

    const confirmInput = await ask(
        lang === "en" ?
        `Please type "${confirmation.en}" to confirm the transaction: ` :
        `Ketik "${confirmation.id}" untuk mengkonfirmasi transaksi: `
    );

    if (
        (lang === "en" && confirmInput === confirmation.en) ||
        (lang === "id" && confirmInput === confirmation.id)
    ) {
        console.log(lang === "en" ? "The transfer is completed" : "Proses transfer berhasil");
    } else {
        console.log(lang === "en" ? "Transfer is cancelled" : "Transfer dibatalkan");
    }

    rl.close();
};

app();
