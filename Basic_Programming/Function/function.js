// ini function perkalian
function perkalian(angka1, angka2, angka3) {
    return angka1 * angka2 * angka3
}
let varPerkalian = perkalian(3, 4, 5)
console.log(varPerkalian)

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

console.log(kalkulasi(3, 5, pengurangan))
console.log(kalkulasi(3, 5, penjumlahan))