    // Fungsi utama
    function CariTandaBilangan(a) {
    if (a < 0) return "Negatif";
    else if (a > 0) return "Positif";
    else return "Nol";
    }

    // Fungsi untuk menjalankan test manual
    function runTests() {
    console.log("=== Menjalankan Unit Test ===");

    const testCases = [
        { input: -5, expected: "Negatif" },
        { input: 10, expected: "Positif" },
        { input: 0, expected: "Nol" }
    ];

    let passed = 0;

    testCases.forEach((test, index) => {
        const result = CariTandaBilangan(test.input);
        const status = result === test.expected ? "✅" : `❌ (Dapat: ${result})`;
        console.log(`Test #${index + 1}: Input = ${test.input}, Output = "${result}", Expected = "${test.expected}" ${status}`);
        if (result === test.expected) passed++;
    });

    console.log(`\nHasil: ${passed}/${testCases.length} test berhasil.\n`);
    }

    // Fungsi untuk interaksi CLI (input user)
    function mintaInputDariUser() {
    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Masukkan sebuah angka: ", (input) => {
        const angka = parseInt(input);
        if (isNaN(angka)) {
        console.log("❌ Input bukan angka yang valid.");
        } else {
        const hasil = CariTandaBilangan(angka);
        console.log(`Hasil: ${hasil}`);
        }
        readline.close();
    });
    }

    // Menjalankan test dulu
    runTests();

    // Minta input dari user
    mintaInputDariUser();
