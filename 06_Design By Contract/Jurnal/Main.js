const SayaTubeUser = require("./SayaTubeUser");
const SayaTubeVideo = require("./SayaTubeVideo");

function testSayaTubeApp() {
    let user = new SayaTubeUser("Novita");
    let movieTitles = [
        "Review Film Interstellar oleh Novita",
        "Review Film Inception oleh Novita",
        "Review Film The Dark Knight oleh Novita",
        "Review Film Tenet oleh Novita",
        "Review Film Parasite oleh Novita",
        "Review Film The Shawshank Redemption oleh Novita",
        "Review Film Fight Club oleh Novita",
        "Review Film Pulp Fiction oleh Novita",
        "Review Film The Matrix oleh Novita",
        "Review Film Whiplash oleh Novita"
    ];

    movieTitles.forEach(title => {
        let video = new SayaTubeVideo(title);
        video.IncreasePlayCount(Math.floor(Math.random() * 1000)); // Menambah play count random
        user.AddVideo(video);
    });

    user.PrintAllVideoPlaycount();
}

testSayaTubeApp();