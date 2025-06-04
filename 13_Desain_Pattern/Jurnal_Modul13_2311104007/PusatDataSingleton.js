    class PusatDataSingleton {
    constructor() {
        if (PusatDataSingleton._instance) {
        return PusatDataSingleton._instance;
        }
        this.DataTersimpan = [];
        PusatDataSingleton._instance = this;
    }

    static GetDataSingleton() {
        if (!PusatDataSingleton._instance) {
        PusatDataSingleton._instance = new PusatDataSingleton();
        }
        return PusatDataSingleton._instance;
    }

    GetSemuaData() {
        return this.DataTersimpan;
    }

    PrintSemuaData() {
        console.log("Isi DataTersimpan:");
        this.DataTersimpan.forEach((data, index) => {
        console.log(`${index + 1}. ${data}`);
        });
    }

    AddSebuahData(input) {
        this.DataTersimpan.push(input);
    }

    HapusSebuahData(index) {
        if (index >= 0 && index < this.DataTersimpan.length) {
        this.DataTersimpan.splice(index, 1);
        } else {
        console.log("Index tidak valid.");
        }
    }
    }

    // ========== PROGRAM UTAMA ==========

    // A & B
    const data1 = PusatDataSingleton.GetDataSingleton();
    const data2 = PusatDataSingleton.GetDataSingleton();

    data1.AddSebuahData("Novita Syahwa");
    data1.AddSebuahData("Rizky Firmansyah");
    data1.AddSebuahData("Dian Prasetyo");
    data1.AddSebuahData("Asisten Praktikum: Kak Revan");

    console.log("\n--- Cetak Data melalui data2 ---");
    data2.PrintSemuaData();

    const indexAsisten = data2.GetSemuaData().findIndex(data => data.includes("Asisten Praktikum"));
    data2.HapusSebuahData(indexAsisten);

    console.log("\n--- Cetak Data melalui data1 setelah penghapusan ---");
    data1.PrintSemuaData();

    console.log(`\nJumlah data di data1: ${data1.GetSemuaData().length}`);
    console.log(`Jumlah data di data2: ${data2.GetSemuaData().length}`);
