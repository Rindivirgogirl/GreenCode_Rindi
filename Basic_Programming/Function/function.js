// ini function perkalian
function perkalian(angka1, angka2, angka3) {
    return angka1 * angka2 * angka3
}
let varPerkalian = perkalian(3, 4, 5)
console.log(varPerkalian)

// ini function pembagian
function pembagian(angka1, angka2) {
    return angka1 / angka2
}
let varPembagian = pembagian(8, 4)
console.log(varPembagian)

// ini membuat function namaku
const namaku= function(nama) {
    console.log ("Hello Namaku", nama)
}
let nama = namaku("rindi")

// ini function kalkulasi
function pengurangan(a, b) {
    return a-b   
}
function penjumlahan(a, b) {
    return a+ b
}
function kalkulasi(a, b, fungsi) {
    return fungsi(a, b)
}

// ini function angkaAwal, angkaAkhir
function angka(angkaAwal, angkaAkhir){
    for (let index = 1; index <= 20; index++) { 
        console.log(index)   
    }
}
angka(1, 20)

// ini function pangkat
function pangkat2(angka){
return angka * angka
}
console.log(pangkat2(20)) 

console.log(kalkulasi(3, 5, pengurangan))
console.log(kalkulasi(3, 5, penjumlahan))