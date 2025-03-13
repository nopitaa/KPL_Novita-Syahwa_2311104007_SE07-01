    const readline = require("readline");

    class PosisiKarakterGame {
    constructor(NIM) {
        this.currentState = "Berdiri";
        this.validStates = ["Berdiri", "Jongkok", "Tengkurap", "Terbang"];
        this.NIM = NIM;
        console.log("State awal:", this.currentState);
    }

    ubahState(newState) {
        if (!this.validStates.includes(newState)) {
        console.log("State tidak valid! Pilih antara:", this.validStates.join(", "));
        return;
        }

        if (this.currentState !== newState) {
        console.log(`Transisi dari ${this.currentState} ke ${newState}`);
        
        if (this.NIM % 3 === 0) {
            console.log(newState === "Jongkok" || newState === "Tengkurap" ? "Tombol arah bawah ditekan" : "Tombol arah atas ditekan");
        } else if (this.NIM % 3 === 1) {
            if (newState === "Berdiri") console.log("Posisi standby");
            if (newState === "Tengkurap") console.log("Posisi istirahat");
        } else if (this.NIM % 3 === 2) {
            if (this.currentState === "Terbang" && newState === "Jongkok") console.log("Posisi landing");
            if (this.currentState === "Berdiri" && newState === "Terbang") console.log("Posisi take off");
        }

        this.currentState = newState;
        } else {
        console.log("Karakter sudah dalam posisi", newState);
        }
    }

    run() {
        const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        });

        console.log("\n=== Simulasi PosisiKarakterGame ===");
        console.log("State yang tersedia:", this.validStates.join(", "));

        const tanya = () => {
        rl.question("\nMasukkan state baru (atau ketik 'exit' untuk keluar): ", (state) => {
            if (state.toLowerCase() === "exit") {
            console.log("Terima kasih telah menggunakan simulator!");
            rl.close();
            } else {
            this.ubahState(state.charAt(0).toUpperCase() + state.slice(1).toLowerCase());
            tanya();
            }
        });
        };

        tanya();
    }
    }

    // masukan nim nya disini 
    const NIM = 2311104007; 
    if (require.main === module) {
    const pg = new PosisiKarakterGame(NIM);
    pg.run();
    }
