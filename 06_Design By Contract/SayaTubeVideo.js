class SayaTubeVideo {
    constructor(title) {
        if (!title || title.length > 100) {
            throw new Error("Judul video tidak boleh kosong dan maksimal 100 karakter.");
        }
        this.id = Math.floor(10000 + Math.random() * 90000); 
        this.title = title;
        this.playCount = 0;
    }

    IncreasePlayCount(count) {
        if (count < 0 || count > 10000000) {
            throw new Error("Jumlah play count harus antara 0 hingga 10.000.000.");
        }
        try {
            if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
                throw new Error("Overflow: play count melebihi batas maksimum integer.");
            }
            this.playCount += count;
        } catch (error) {
            console.error(error.message);
        }
    }

    PrintVideoDetails() {
        console.log(`ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}

try {
    const video = new SayaTubeVideo("Tutorial Design By Contract – NOPI");
    for (let i = 0; i < 20; i++) {
        video.IncreasePlayCount(10000000);
    }
    video.PrintVideoDetails();
} catch (error) {
    console.error("Error: " + error.message);
}