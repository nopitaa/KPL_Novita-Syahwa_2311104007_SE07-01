// Class dengan method statis untuk menjumlahkan tiga angka
class Penjumlahan {
    static jumlahTigaAngka(angka1, angka2, angka3) {
        let total = angka1 + angka2 + angka3;
        return total;
    }
}

// NIM yang akan diproses
const nim = "2311104007";

// Ambil digit terakhir NIM untuk menentukan tipe data
const lastDigit = parseInt(nim[nim.length - 1]);

// Ambil 3 pasangan angka dari NIM
const input1 = parseInt(nim.substring(0, 2)); // "12"
const input2 = parseInt(nim.substring(2, 4)); // "34"
const input3 = parseInt(nim.substring(4, 6)); // "56"

let angka1, angka2, angka3;

// Tentukan tipe data berdasarkan aturan digit terakhir NIM
if (lastDigit === 1 || lastDigit === 2) {
    angka1 = parseFloat(input1);
    angka2 = parseFloat(input2);
    angka3 = parseFloat(input3);
} else if (lastDigit === 3 || lastDigit === 4 || lastDigit === 5) {
    angka1 = Number(input1);
    angka2 = Number(input2);
    angka3 = Number(input3);
} else if (lastDigit === 6 || lastDigit === 7 || lastDigit === 8) {
    angka1 = parseInt(input1);
    angka2 = parseInt(input2);
    angka3 = parseInt(input3);
} else if (lastDigit === 9 || lastDigit === 0) {
    angka1 = BigInt(input1);
    angka2 = BigInt(input2);
    angka3 = BigInt(input3);
}

// Panggil method penjumlahan
const hasil = Penjumlahan.jumlahTigaAngka(angka1, angka2, angka3);

// Tampilkan hasil ke konsol
console.log(`Hasil Penjumlahan: ${hasil}`);
