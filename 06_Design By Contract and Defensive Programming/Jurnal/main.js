import SayaTubeUser from "./SayaTubeUser.js";
import SayaTubeVideo from "./SayaTubeVideo.js";
function main() {
    let username = "NOVITA SYAHWA";
    let user = new SayaTubeUser(username);
    let movies = [
        "Malin Kundang", "Dead Out", "The Dark Knight", "Parasite", "Next door",
        "The Nun", 
    ];

    movies.forEach(movie => {
        let video = new SayaTubeVideo(`Review Film ${movie} oleh ${username}`);
        video.IncreasePlayCount(Math.floor(Math.random() * 1000)); 
        user.AddVideo(video);
        video.PrintVideoDetails();
    });

    user.PrintAllVideoPlaycount();
    console.log(`Total Play Count: ${user.GetTotalVideoPlayCount()}`);
}

main();
