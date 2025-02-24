let globalVariable = "Novita Syahwa "
//global variable yang di deklarasiin di luar functrion 
function getMyIdentitiy() {
    let localVariable = "2311104007"
    console.log(`Nama aku ${globalVariable} dan nim aku ${localVariable}`)
}

console.log(globalVariable)
//console.log(localVariable)
getMyIdentitiy()