class SayaTubeVideo {
    constructor(title) {
        this.id = Math.floor(10000 + Math.random() * 90000); 
        this.title = title;
        this.playCount = 0;
    }

    IncreasePlayCount(count) {
        if (count < 0) {
            console.log("Play count tidak boleh negatif.");
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

const video = new SayaTubeVideo("Tutorial Design By Contract – Novita");
video.IncreasePlayCount(100);
video.PrintVideoDetails();