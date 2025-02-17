import process from "process";
import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Siapa nama kamu? ", (nama) => {
    console.info(`Hallo ${nama}`);
    
    input.question("Apa jurusan kamu? ", (jurusan) => {
        console.info(`Jurusan     : ${jurusan}`);
        
        input.question("Di universitas mana kamu kuliah? ", (universitas) => {
            console.info(`Universitas : ${universitas}`);
            
            input.question("Berapa umur kamu? ", (umur) => {
                console.info(`Umur        : ${umur} tahun`);
                
                input.close();
            });
        });
    });
});
