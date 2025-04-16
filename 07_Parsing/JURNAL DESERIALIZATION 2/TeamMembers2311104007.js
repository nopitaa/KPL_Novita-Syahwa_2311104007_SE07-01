    const fs = require('fs');

    class TeamMembers2311104007 {
    static ReadJSON() {
        const path = './jurnal7_2_2311104007.json'; 

        try {
        const data = fs.readFileSync(path, 'utf-8');
        const json = JSON.parse(data); 

        console.log("Team member list:");

        json.members.forEach(member => {
            const fullName = `${member.firstName} ${member.lastName}`;
            console.log(`${member.nim} ${fullName} (${member.age} ${member.gender})`);
        });

        } catch (err) {
        console.error("Gagal membaca file JSON:", err.message);
        }
    }
    }

    module.exports = TeamMembers2311104007;
