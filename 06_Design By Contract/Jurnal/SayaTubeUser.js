const SayaTubeVideo = require("./SayaTubeVideo");

class SayaTubeUser {
    constructor(username) {
        if (typeof username !== "string" || username.length === 0) {
            throw new Error("Username harus berupa string yang tidak kosong");
        }
        this.id = Math.floor(10000 + Math.random() * 90000); // 5-digit random ID
        this.username = username;
        this.uploadedVideos = [];
    }

    AddVideo(video) {
        if (!(video instanceof SayaTubeVideo)) {
            console.log("Error: Hanya bisa menambahkan instance dari SayaTubeVideo");
            return;
        }
        this.uploadedVideos.push(video);
    }

    GetTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((sum, video) => sum + video.playCount, 0);
    }

    PrintAllVideoPlaycount() {
        console.log(`User: ${this.username}`);
        this.uploadedVideos.forEach((video, index) => {
            console.log(`Video ${index + 1} judul: ${video.title}`);
        });
        console.log(`Total Play Count: ${this.GetTotalVideoPlayCount()}`);
    }
}

module.exports = SayaTubeUser;
