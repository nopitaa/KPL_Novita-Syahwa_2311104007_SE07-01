const MathLib = require('./MatematikaLibraries');

// FPB
console.log("FPB(60, 45):", MathLib.FPB(60, 45)); // Output: 15

// KPK
console.log("KPK(12, 8):", MathLib.KPK(12, 8)); // Output: 24

//  Turunan
console.log("Turunan([1, 4, -12, 9]):", MathLib.Turunan([1, 4, -12, 9])); // Output: "3x2 + 8x - 12"

//  Integral
console.log("Integral([4, 6, -12, 9]):", MathLib.Integral([4, 6, -12, 9])); // Output: "1x4 + 2x3 - 6x2 + 9x + C"