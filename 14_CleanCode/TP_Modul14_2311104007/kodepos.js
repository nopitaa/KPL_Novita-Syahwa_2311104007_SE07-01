// Class untuk menyimpan dan mencari kode pos berdasarkan nama kelurahan
class KodePos {
    // Dictionary yang menyimpan pasangan kelurahan dan kode pos
    static kodePosDict = {
        batununggal: 40266,
        kujangsari: 40287,
        mengger: 40267,
        wates: 40256,
        cijaura: 40287,
        jatisari: 40286,
        margasari: 40286,
        sekejati: 40286,
        kebonwaru: 40272,
        maleer: 40274,
        samoja: 40273,
    };
    // Method untuk mendapatkan kode pos dari kelurahan tertentu
    static getKodePos(kelurahan) {
        return (
            this.kodePosDict[kelurahan.toLowerCase()] || "Kode pos tidak ditemukan"
        );
    }
    // Method untuk mendapatkan list nama kelurahan dalam format huruf kapital depan
    static getListKelurahan() {
        return Object.keys(this.kodePosDict).map(
            (kelurahan) => kelurahan.charAt(0).toUpperCase() + kelurahan.slice(1)
        );
    }
}
// Import module readline untuk input dari terminal
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Tampilkan daftar kelurahan yang tersedia
console.log("Daftar Kelurahan yang tersedia:");
console.log(KodePos.getListKelurahan().join(", "));
    
// Minta pengguna memasukkan nama kelurahan
readline.question("Masukkan nama kelurahan yang dicari: ", (kelurahan) => {
    console.log(`Kode Pos ${kelurahan}: ${KodePos.getKodePos(kelurahan)}`);
    readline.close();
});
