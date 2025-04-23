    const fs = require('fs');

    class GlossaryItem2311104007 {
    static ReadJSON() {
        const path = './jurnal7_3_2311104007.json';

        try {
        const data = fs.readFileSync(path, 'utf-8');
        const json = JSON.parse(data);

        const entry = json.glossary.GlossDiv.GlossList.GlossEntry;

        console.log("=== GlossEntry Details ===");
        console.log(`ID         : ${entry.ID}`);
        console.log(`SortAs     : ${entry.SortAs}`);
        console.log(`GlossTerm  : ${entry.GlossTerm}`);
        console.log(`Acronym    : ${entry.Acronym}`);
        console.log(`Abbrev     : ${entry.Abbrev}`);
        console.log(`Definition : ${entry.GlossDef.para}`);
        console.log(`See Also   : ${entry.GlossDef.GlossSeeAlso.join(', ')}`);
        console.log(`GlossSee   : ${entry.GlossSee}`);

        } catch (err) {
        console.error("Gagal membaca file JSON:", err.message);
        }
    }
    }

    module.exports = GlossaryItem2311104007;
