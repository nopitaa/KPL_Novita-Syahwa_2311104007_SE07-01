const SayaTubeVideo = require('./SayaTubeVideo');

class SayaTubeUser {
    constructor(username) {
        if (!username || username.length > 100) {
            throw new Error("Username tidak boleh kosong dan maksimal 100 karakter.");
        }

        this.id = Math.floor(10000 + Math.random() * 90000); // 5-digit random ID
        this.username = username;
        this.uploadedVideos = [];
    }

    AddVideo(video) {
        if (!video || !(video instanceof SayaTubeVideo)) {
            throw new Error("Video yang ditambahkan harus berupa instance dari SayaTubeVideo.");
        }
        
        if (video.playCount > Number.MAX_SAFE_INTEGER) {
            throw new Error("Play count video tidak boleh melebihi batas maksimum integer.");
        }

        this.uploadedVideos.push(video);
    }

    GetTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((sum, video) => sum + video.playCount, 0);
    }

    PrintAllVideoPlaycount() {
        console.log(`User: ${this.username}`);
        let maxVideos = Math.min(8, this.uploadedVideos.length);
        for (let i = 0; i < maxVideos; i++) {
            console.log(`Video ${i + 1} judul: ${this.uploadedVideos[i].title}`);
        }
    }
}

module.exports = SayaTubeUser;
