//if 
const a = 5
const b = 7 
const c = 2

if (a > b){
    console.log('a lebih besar dari b')}

if (a % 2 === 0){
    console.log("a habis di bagi 2")
}else if (b % 2 === 0){
    console.log("b habis di bagi 2")
}else if (c % 2 === 0){
    console.log("c  habis di bagi 2")    
}else {
    console.log("semua angka tidak habis dibagi 2")
}

//switch
let pilihan = 2

switch (pilihan){
    case 1:
        console.log("anda memilih nomor 1")
        break
    case 2:
        console.log("anda memilih nomor 2")
        break
    case 3:
        console.log("anda memilih nomor 3")
        break
    default:
        console.log("anda tidak memilih nomor 1,2,3")
}