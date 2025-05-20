    const AljabarLibraries = {
    
        /**
         * @param {number[]} koefisien 
         * @returns {number[]} 
         */
    
        AkarPersamaanKuadrat: function (koefisien) {
        const [a, b, c] = koefisien;                
        const diskriminan = b * b - 4 * a * c;      
    
        if (diskriminan < 0) {
            throw new Error("Tidak memiliki akar real."); 
        }
    
        const akar1 = (-b + Math.sqrt(diskriminan)) / (2 * a); 
        const akar2 = (-b - Math.sqrt(diskriminan)) / (2 * a); 
    
        return [akar1, akar2]; 
        },
    
        /**
         * @param {number[]} koefisien 
         * @returns {number[]} 
         */
        HasilKuadrat: function (koefisien) {
        const [a, b] = koefisien;
    
        // Rumus: (ax + b)² = a²x² + 2abx + b²
        const a2 = a * a;
        const ab2 = 2 * a * b;
        const b2 = b * b;
    
        return [a2, ab2, b2]; 
        }
    };
    
    module.exports = AljabarLibraries;