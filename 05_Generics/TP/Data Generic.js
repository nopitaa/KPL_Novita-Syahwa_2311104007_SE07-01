class DataGeneric {
    constructor(data) {
        this.data = data; 
    }

    PrintData() {
        console.log(`Data yang tersimpan adalah: ${this.data}`);
    }
}

function main() {
    const nim = "2311104007"; // Ganti dengan NIM praktikan
    const dataGeneric = new DataGeneric(nim);
    dataGeneric.PrintData();
}

main();
