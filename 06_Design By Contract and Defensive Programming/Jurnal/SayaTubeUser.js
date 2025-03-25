import SayaTubeVideo from "./SayaTubeVideo.js";
class SayaTubeUser {
    constructor(username) {
        this.id = Math.floor(10000 + Math.random() * 90000);
        this.username = username;
        this.uploadedVideos = [];
    }

    AddVideo(video) {
        if (video instanceof SayaTubeVideo) {
            this.uploadedVideos.push(video);
        }
    }

    GetTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
    }

    PrintAllVideoPlaycount() {
        console.log(`User: ${this.username}`);
        this.uploadedVideos.forEach((video, index) => {
            console.log(`Video ${index + 1} judul: ${video.title}`);
        });
    }
}
export default SayaTubeUser;