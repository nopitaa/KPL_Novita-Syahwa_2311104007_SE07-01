class SayaTubeVideo {
    constructor(title) {
        if (typeof title !== "string" || title.length === 0) {
            throw new Error("Title harus berupa string yang tidak kosong");
        }
        this.id = Math.floor(10000 + Math.random() * 90000); // 5-digit random ID
        this.title = title;
        this.playCount = 0;
    }

    IncreasePlayCount(count) {
        if (typeof count !== "number" || count <= 0 || count > 1000000) {
            console.log("Error: Jumlah play count tidak valid");
            return;
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
