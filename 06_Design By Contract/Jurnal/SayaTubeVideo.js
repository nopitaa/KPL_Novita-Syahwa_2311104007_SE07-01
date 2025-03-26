class SayaTubeVideo {
    constructor(title) {
        if (!title || title.length > 200) {
            throw new Error("Judul video tidak boleh kosong dan maksimal 200 karakter.");
        }
        
        this.id = Math.floor(10000 + Math.random() * 90000); // 5-digit random ID
        this.title = title;
        this.playCount = 0;
    }

    IncreasePlayCount(count) {
        if (count < 0 || count > 25000000) {
            throw new Error("Play count harus antara 0 hingga 25.000.000.");
        }
        
        if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
            throw new Error("Jumlah play count melebihi batas maksimum integer.");
        }
        
        this.playCount += count;
    }

    PrintVideoDetails() {
        console.log(`ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}

module.exports = SayaTubeVideo;
