class SayaTubeVideo {
    constructor(title) {
        this.id = Math.floor(10000 + Math.random() * 90000); // 5-digit random ID
        this.title = title;
        this.playCount = 0;
    }

    IncreasePlayCount(count) {
        if (count > 0) {
            this.playCount += count;
        }
    }

    PrintVideoDetails() {
        console.log(`ID: ${this.id}, Title: ${this.title}, Play Count: ${this.playCount}`);
    }
}
export default SayaTubeVideo;