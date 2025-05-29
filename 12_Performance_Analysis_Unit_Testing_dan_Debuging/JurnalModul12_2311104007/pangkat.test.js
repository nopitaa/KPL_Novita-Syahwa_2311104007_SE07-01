const { CariNilaiPangkat } = require('./pangkat');

    test('2^3 = 8', () => {
    expect(CariNilaiPangkat(2, 3)).toBe(8);
    });

    test('a^0 = 1', () => {
    expect(CariNilaiPangkat(5, 0)).toBe(1);
    });

    test('b negatif = -1', () => {
    expect(CariNilaiPangkat(2, -3)).toBe(-1);
    });

    test('b > 10 = -2', () => {
    expect(CariNilaiPangkat(2, 11)).toBe(-2);
    });

    test('a > 100 = -2', () => {
    expect(CariNilaiPangkat(101, 5)).toBe(-2);
    });

    test('hasil terlalu besar = -3', () => {
    expect(CariNilaiPangkat(9999999, 10)).toBe(-3);
    });
