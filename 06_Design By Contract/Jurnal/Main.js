const SayaTubeUser = require('./SayaTubeUser');
const SayaTubeVideo = require('./SayaTubeVideo');

function testSayaTubeApp() {
    try {
        let user = new SayaTubeUser("Novita");
        let movieTitles = [
            "Review Film The Nun oleh Novita",
            "Review Film Inception oleh Novita",
            "Review Film The Dark Knight oleh Novita",
            "Review Film Next Door oleh Novita",
            "Review Film Parasite oleh Novita",
            "Review Film King tHe Land oleh Novita",
            "Review Film Fight Club oleh Novita",
            "Review Film Mariposa oleh Novita",
            "Review Film Lampor oleh Novita",
            "Review Film Perempuan ahli kubur oleh Novita"
        ];

        movieTitles.forEach(title => {
            try {
                let video = new SayaTubeVideo(title);
                video.IncreasePlayCount(Math.floor(Math.random() * 1000));
                user.AddVideo(video);
            } catch (error) {
                console.error("Error saat menambahkan video:", error.message);
            }
        });

        user.PrintAllVideoPlaycount();
    } catch (error) {
        console.error("Error pada aplikasi:", error.message);
    }
}

testSayaTubeApp();
