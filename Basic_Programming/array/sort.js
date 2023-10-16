// ini mengurutkan nama buah sesuai abjad
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits)

// ini mengurutkan bilangan dari yg kecil ke yg besar
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});
console.log(points)

const points0 = [40, 100, 1, 5, 25, 10];
points0.sort(function(angkaKecil, angkaBesar){
    return angkaKecil - angkaBesar
})
console.log(points0)

// ini mengurutkan bilangan dari yg besar ke yg kecil
const points1 = [40, 100, 1, 5, 25, 10];
points1.sort(function(a, b){return b-a});
console.log(points1)