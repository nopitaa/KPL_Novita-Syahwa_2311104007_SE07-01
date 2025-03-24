let arr = Array.from({ length: 50 }, (_, i) => i);

// Menampilkan elemen array sesuai aturan
arr.forEach(i => {
    if (i % 2 === 0 && i % 3 === 0)
        console.log(`${i} #$#$`);
    else if (i % 2 === 0)
        console.log(`${i} ##`);
    else if (i % 3 === 0)
        console.log(`${i} $$`);
    else
        console.log(i);
});
