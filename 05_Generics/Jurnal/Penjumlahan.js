class Penjumlahan {
    static JumlahTigaAngka(T1, T2, T3) {
        let total = T1 + T2 + T3;
        return total;
    }
}

let nim = "2311104007";
let lastDigit = parseInt(nim[nim.length - 1]);
let input1 = parseInt(nim.substring(0, 2)); // "12"
let input2 = parseInt(nim.substring(2, 4)); // "34"
let input3 = parseInt(nim.substring(4, 6)); // "56"

//tipe data berdasarkan aturan yang diberikan
let angka1, angka2, angka3;
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

let hasil = Penjumlahan.JumlahTigaAngka(angka1, angka2, angka3);
console.log(`Hasil Penjumlahan: ${hasil}`);
