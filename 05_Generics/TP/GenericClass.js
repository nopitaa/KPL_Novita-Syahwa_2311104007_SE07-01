class DataGeneric {
    constructor(data) {
        this.data = data; 
    }

    PrintData() {
        console.log(`Data yang tersimpan adalah: ${this.data}`);
    }
}

testData = new DataGeneric("2311104007");
testData.PrintData();
