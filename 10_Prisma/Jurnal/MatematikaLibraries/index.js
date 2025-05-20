    const MatematikaLibraries = {
      //  Fungsi untuk mencari Faktor Persekutuan Terbesar (FPB)
        FPB: function (a, b) {
        while (b !== 0) {
            let temp = b;    
            b = a % b;     
            a = temp;       
        }
        return Math.abs(a); 
        },
    
        // Fungsi untuk mencari Kelipatan Persekutuan Terkecil (KPK)
        KPK: function (a, b) {
        // Menghitung KPK dengan rumus: (a * b) / FPB(a, b)
        return Math.abs((a * b) / this.FPB(a, b));
        },
            Turunan: function (koefisien) {
        let hasil = [];                         
        let derajat = koefisien.length - 1;     
        for (let i = 0; i < koefisien.length - 1; i++) {
            const koef = koefisien[i] * (derajat - i);
            if (koef === 0) continue;                 
            let pangkat = derajat - i - 1;            
    
            if (pangkat === 0) {
            hasil.push(`${koef}`);            
            } else if (pangkat === 1) {
            hasil.push(`${koef}x`);           
            } else {
            hasil.push(`${koef}x${pangkat}`); 
            }
        }
    
        return hasil.join(' + ').replace(/\+\s\-/, '- ');
        },
    
        // Fungsi untuk menghitung integral dari persamaan polinomial
        Integral: function (koefisien) {
        let hasil = [];                         
        let derajat = koefisien.length - 1;    
    
        for (let i = 0; i < koefisien.length; i++) {
            const pangkat = derajat - i + 1;         
            const koef = koefisien[i] / pangkat;    
            if (koef === 0) continue;              
            let formatted = '';
            if (pangkat === 1) {
            formatted = `${koef}x`;            
            } else {
            formatted = `${koef}x${pangkat}`;   
            }
    
            hasil.push(formatted);             
        }
    
        hasil.push('C');  
        return hasil.join(' + ').replace(/\+\s\-/, '- ');
        }
    };
    
    module.exports = MatematikaLibraries;