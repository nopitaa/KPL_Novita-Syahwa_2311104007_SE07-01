class DoorMachine {
    constructor() {
        this.state = "Terkunci";
        console.log("Pintu terkunci");
    }

    kunciPintu() {
        if (this.state === "Terbuka") {
            this.state = "Terkunci";
            console.log("Pintu terkunci");
        } else {
            console.log("Pintu sudah terkunci");
        }
    }

    bukaPintu() {
        if (this.state === "Terkunci") {
            this.state = "Terbuka";
            console.log("Pintu tidak terkunci");
        } else {
            console.log("Pintu sudah terbuka");
        }
    }
}

const door = new DoorMachine();
door.bukaPintu();  // Mengubah state menjadi Terbuka
door.bukaPintu();  // Mencoba membuka pintu yang sudah terbuka
door.kunciPintu(); // Mengubah state menjadi Terkunci
door.kunciPintu(); // Mencoba mengunci pintu yang sudah terkunci
